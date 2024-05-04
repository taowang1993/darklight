document.documentElement.style.display = 'none';

// Load Dark Reader script
var darkReaderScript = document.createElement('script');
darkReaderScript.src = 'https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js';
darkReaderScript.onload = function() {
    // Dark Reader script is loaded, now you can use DarkReader object
    let isDarkModeEnabledFromStorage = false;
    try {
        isDarkModeEnabledFromStorage = localStorage.getItem('SunMoon') === 'enabled';
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
  
    if (isDarkModeEnabledFromStorage) {
        DarkReader.enable({ brightness: 120, contrast: 90, sepia: 10 });
    } else {
        DarkReader.disable();
    }
    // Restore display after setting theme
    document.documentElement.style.display = '';
};

// Append Dark Reader script to the document
document.head.appendChild(darkReaderScript);
