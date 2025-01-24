const VERBOSE = false;
window.osIsDarkTheme = function() {
    let osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    VERBOSE && console.info("OS Theme: ", osTheme ? 'dark' : 'light')
    return osTheme;
}

window.detectTheme = function() {
    let theme = localStorage.theme === 'dark' || (!('theme' in localStorage) && osIsDarkTheme());
    VERBOSE && console.info("Detected Theme: ", theme ? 'dark' : 'light');
    return theme;
}

window.reloadTheme = function() {
    document.documentElement.classList.toggle(
      'dark',
      window.detectTheme()
    )
}

window.setTheme = function(theme) {
    if (theme == null) {
        VERBOSE && console.info("Clearing theme.", " previously ", localStorage.theme)
        localStorage.removeItem('theme');
    } else {
        VERBOSE && console.info("Setting theme to: ", theme, " previously ", localStorage.theme);
        localStorage.theme = theme;
    }
    window.reloadTheme();
}

window.getTheme = function(theme) {
    return localStorage.theme ?? (osIsDarkTheme() ? 'dark' : 'light');
}

window.toggleTheme = function() {
    window.setTheme(window.getTheme() == 'dark' ? 'light' : 'dark');
}

async function boot() {
    console.log("Boot...");
    //window.setTheme('dark');
    //window.setTheme('light');
    window.setTheme(undefined);
    setInterval(() => {
        window.reloadTheme();
    }, 500);
    //window.setTheme(null);
    console.log("\t...done.");
}
boot();