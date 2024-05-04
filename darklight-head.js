var script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/darkreader/darkreader.min.js";
document.head.appendChild(script);

document.documentElement.style.display = 'none'; // Prevent FOUC
window.addEventListener('load', function() {
    let isDarkModeEnabledFromStorage = false;
    try {
        isDarkModeEnabledFromStorage = localStorage.getItem('SunMoon') === 'enabled';
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }

    if (isDarkModeEnabledFromStorage) {
        DarkReader.enable({
            brightness: 120,
            contrast: 90,
            sepia: 10
        });
    } else {
        DarkReader.disable();
    }

    document.documentElement.style.display = ''; // Restore display after setting theme
});
