document.addEventListener('DOMContentLoaded', function () {
    const updateIcon = (isEnabled) => {
        const sunMoonIcon = document.querySelector('#localnavbarplus-darklight i.icon');
        if (sunMoonIcon) {
            sunMoonIcon.className = isEnabled ? 'icon bi bi-sun' : 'icon bi bi-moon-stars-fill';
            sunMoonIcon.setAttribute('aria-label', isEnabled ? 'Disable dark mode' : 'Enable dark mode');
        }
    };

    let isDarkModeEnabledFromStorage = false;
    try {
        isDarkModeEnabledFromStorage = localStorage.getItem('SunMoon') === 'enabled';
    } catch (error) {
        console.error('Error accessing localStorage:', error);
    }
    updateIcon(isDarkModeEnabledFromStorage);

    const toggleSunMoonDiv = document.getElementById('localnavbarplus-darklight');
    if (toggleSunMoonDiv) {
        toggleSunMoonDiv.addEventListener('click', function(event) {
            event.preventDefault();
            let isDarkModeCurrentlyActive = DarkReader.isEnabled();
            try {
                if (isDarkModeCurrentlyActive) {
                    DarkReader.disable();
                    localStorage.setItem('SunMoon', 'disabled');
                } else {
                    DarkReader.enable({ brightness: 120, contrast: 120, sepia: 0 });
                    localStorage.setItem('SunMoon', 'enabled');
                }
            } catch (error) {
                console.error('Error updating localStorage:', error);
            }
            updateIcon(!isDarkModeCurrentlyActive); // Updates the icon based on the new state
        });
    }
});

