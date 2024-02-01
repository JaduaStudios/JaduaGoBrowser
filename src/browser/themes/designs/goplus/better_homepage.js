document.addEventListener('DOMContentLoaded', function () {
  // Adding a delay (in milliseconds) to ensure styles are applied after DOM load
  setTimeout(function () {
    // Get the #root element
    var rootElement = document.getElementById('root');

    // Check if --newtab-background-color is rgb(242, 241, 244)
    var newTabBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--newtab-background-color').trim();

    console.log('Current background color:', newTabBackgroundColor);

    if (newTabBackgroundColor === 'rgb(29, 33, 41)') {
      // Add different background styles if the condition is true for the new color
      rootElement.style.background = 'linear-gradient(rgba(34, 36, 43, 0.5), rgba(17, 18, 19, 0.5)), url(https://source.unsplash.com/random/3840x2160/?city night,landscape night,dark)';
	  rootElement.style.backgroundSize = 'cover';
    } else if (newTabBackgroundColor === 'rgb(242, 241, 245)') {
      // Add the background styles if the condition is true
      rootElement.style.background = 'linear-gradient(rgba(255, 255, 255, 0.31), rgba(255, 255, 255, 0.09)), url("https://source.unsplash.com/random/3840x2160/?city white,landscape day,pastel colors, light")';
	  rootElement.style.backgroundSize = 'cover';
	} else if (newTabBackgroundColor === 'rgb(5, 7, 10)') {
      // Add the background styles if the condition is true
      rootElement.style.background = 'url(chrome://browser/skin/gx/images/newtab/wallpaper-dark.png)';
	  rootElement.style.backgroundSize = 'cover';
	} else if (newTabBackgroundColor === 'rgb(243, 241, 244)') {
      // Add the background styles if the condition is true
      rootElement.style.background = 'url(chrome://browser/skin/gx/images/newtab/wallpaper-light.png)';
	  rootElement.style.backgroundSize = 'cover';
    } else {
      console.log('No matching background color found');
    }
	
  }, 500); // Adding a 500 ms (0.5 second) delay
});
