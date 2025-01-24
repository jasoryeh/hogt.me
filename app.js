
window.osIsDarkTheme = function() {
    return  window.matchMedia('(prefers-color-scheme: dark)').matches;
}

window.detectTheme = function() {
    let theme = localStorage.theme === 'dark' || (!('theme' in localStorage) && osIsDarkTheme());
    console.info("Detected Theme: ", theme ? 'dark' : 'light');
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
        localStorage.removeItem('theme');
    } else {
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
    window.setTheme('dark');
    window.reloadTheme();
    //window.setTheme(null);
    console.log("\t...done.");
}
boot();