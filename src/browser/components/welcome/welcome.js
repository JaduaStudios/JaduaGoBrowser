// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.
const { XPCOMUtils } = ChromeUtils.import(
  'resource://gre/modules/XPCOMUtils.jsm'
)

XPCOMUtils.defineLazyModuleGetters(this, {
  AddonManager: 'resource://gre/modules/AddonManager.jsm',
  MigrationUtils: 'resource:///modules/MigrationUtils.jsm',
})

ChromeUtils.defineModuleGetter(
  this,
  'ExtensionSettingsStore',
  'resource://gre/modules/ExtensionSettingsStore.jsm'
)

const welcomeSeenPref = 'pulse.welcome.seen'

// =============================================================================
// Util stuff copied from browser/components/preferences/search.js

class EngineStore {
  constructor() {
    this._engines = []
  }

  async init() {
    const visibleEngines = await Services.search.getVisibleEngines()
    this.initSpecificEngine(visibleEngines)
  }

  getEngine() {
    return this._engines
  }

  initSpecificEngine(engines) {
    for (const engine of engines) {
      this._engines.push(this._cloneEngine(engine))
    }
  }

  getEngineByName(name) {
    return this._engines.find((engine) => engine.name == name)
  }

  _cloneEngine(aEngine) {
    const clonedObj = {}

    for (const i of ['name', 'alias', 'iconURI', 'hidden']) {
      clonedObj[i] = aEngine[i]
    }

    clonedObj.originalEngine = aEngine

    return clonedObj
  }

  async getDefaultEngine() {
    let engineName = await Services.search.getDefault()
    return this.getEngineByName(engineName._name)
  }

  async setDefaultEngine(engine) {
    await Services.search.setDefault(
      engine.originalEngine,
      Ci.nsISearchService.CHANGE_REASON_USER
    )
  }
}

// =============================================================================

const sleep = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration))

class Page {
  /**
   * A basic controller for individual pages
   * @param {string} id The id of the element that represents this page.
   */
  constructor(id) {
    this.element = document.getElementById(id)
    this.nextEl = document.getElementById(`${id}Next`)

    this.nextEl.addEventListener('click', () => {
      this.pages.next()
    })
  }

  /**
   *
   * @param {Pages} pages The pages wrapper
   */
  setPages(pages) {
    this.pages = pages
  }

  hide() {
    this.element.style.display = 'none'
  }

  show() {
    this.element.style.display = ''
  }
}

class Themes extends Page {
  constructor(id) {
    super(id)

    this.loadThemes()
  }

  async loadThemes() {
    await sleep(1000)

    const themes = (await AddonManager.getAddonsByTypes(['theme'])).filter(
      (theme) => !theme.id.includes('colorway')
    )
    const themeList = document.getElementById('themeList')

    const themeElements = []

    themes.forEach((theme) => {
      const container = document.createElement('div')
      container.classList.add('card')

      if (theme.isActive) {
        container.classList.add('selected')
      }

      container.addEventListener('click', () => {
        themeElements.forEach((el) => el.classList.remove('selected'))
        container.classList.add('selected')
        theme.enable()
      })

      const img = document.createElement('img')
      img.src = theme.icons['32']

      const name = document.createElement('h3')
      name.textContent = theme.name

      container.appendChild(img)
      container.appendChild(name)

      themeList.appendChild(container)
      themeElements.push(container)
    })
  }
}

class Features extends Page {
  constructor(id) {
    super(id)

    /** @type {HTMLDivElement} */
    this.enableFeatures = document.getElementById('enableFeatures')

    /** @type {{ l10nId: string; image: string; pref: string; }[]} */
    this.features = [
      {
        l10nId: 'welcome-dialog-feature-vertical-tabs',
        image: 'vertical.vis.svg',
        pref: 'pulse.tabs.vertical',
      },
      {
        l10nId: 'welcome-dialog-feature-sidebar-tabs',
        image: 'sidebar.vis.svg',
        pref: 'pulse.sidebar.enabled',
      },
    ]

    for (const feature of this.features) {
      const container = document.createElement('div')
      container.classList.add('card')
      if (Services.prefs.getBoolPref(feature.pref, false))
        container.classList.add('selected')

      container.addEventListener('click', () => {
        const newValue = !Services.prefs.getBoolPref(feature.pref, false)
        Services.prefs.setBoolPref(feature.pref, newValue)

        if (newValue) container.classList.add('selected')
        else container.classList.remove('selected')
      })

      const img = document.createElement('img')
      img.src = feature.image

      const name = document.createElement('h3')
      name.setAttribute('data-l10n-id', feature.l10nId)

      container.appendChild(img)
      container.appendChild(name)

      this.enableFeatures.appendChild(container)
    }
  }
}

class Search extends Page {
  constructor(id) {
    super(id)

    this.store = new EngineStore()
    this.searchList = []

    this.loadSearch()
  }

  async loadSearch() {
    await sleep(1100)
    await this.store.init()

    const defaultEngine = await Services.search.getDefault()

    const searchElements = document.getElementById('searchList')

    this.store.getEngine().forEach((search) => {
      const container = this.loadSpecificSearch(search, defaultEngine)

      searchElements.appendChild(container)
      this.searchList.push(container)
    })
  }

  /**
   * @returns {HTMLDivElement}
   */
  loadSpecificSearch(search, defaultSearch) {
    const container = document.createElement('div')
    container.classList.add('card')

    if (search.name == defaultSearch._name) {
      container.classList.add('selected')
    }

    container.addEventListener('click', () => {
      this.searchList.forEach((el) => el.classList.remove('selected'))
      container.classList.add('selected')
      this.store.setDefaultEngine(search)
    })

    const img = document.createElement('img')
    img.src = search.iconURI.spec

    const name = document.createElement('h3')
    name.textContent = search.name

    container.appendChild(img)
    container.appendChild(name)

    return container
  }
}

class Import extends Page {
  constructor(id) {
    super(id)

    const importButton = document.getElementById('importBrowser')
    importButton.addEventListener('click', () => {
      MigrationUtils.showMigrationWizard(window, [
        MigrationUtils.MIGRATION_ENTRYPOINT_NEWTAB,
        null,
      ])
      this.nextEl.click()
    })
  }
}

class Pages {
  /**
   * A wrapper around all pages
   * @param {Page[]} pages The pages
   */
  constructor(pages) {
    this.pages = pages
    this.currentPage = 0

    this.pages.forEach((page) => page.setPages(this))

    this._displayCurrentPage()
  }

  next() {
    this.currentPage++

    if (this.currentPage >= this.pages.length) {
      // We can use internal js apis to close the window. We also want to set
      // the settings api for welcome seen to false to stop it showing again

      Services.prefs.setBoolPref(welcomeSeenPref, true)

      close()
      return
    }

    this._displayCurrentPage()
  }

  _displayCurrentPage() {
    for (const page of this.pages) {
      page.hide()
    }

    this.pages[this.currentPage].show()
  }
}

const pages = new Pages([
  new Page('welcome'),
  new Import('import'),
  new Themes('theme'),
  new Search('search'),
  new Features('features'),
])
