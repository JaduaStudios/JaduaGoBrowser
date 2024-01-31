const { Prefs } = ChromeUtils.import(
  "resource://activity-stream/lib/ActivityStreamPrefs.jsm"
);

// Check your condition here
var shouldApplyBackground = Services.prefs.getStringPref("browser.newtabpage.activity-stream.go.background.image"); // Change this based on your actual condition

// Get the #root element
var rootElement = document.getElementById('root');

// Check the condition and add the background styles if true
if (shouldApplyBackground) {
  rootElement.style.background = 'linear-gradient(rgba(211, 211, 211, 0.31), rgba(93, 93, 96, 0.5)), url(https://source.unsplash.com/random/3840x2160/?city+day,landscape+day,abstract+day)';
  rootElement.style.backgroundSize = 'cover';
  // Add more styles as needed
}
