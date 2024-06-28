
function getNavLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    return lang.toLowerCase();
}

function loadWebsite() {
    var lang = getNavLanguage();
    var currentPage = window.location.pathname;

    // Verificar si el idioma es español y si no estamos ya en la página en español
    if (lang.startsWith('es') && !currentPage.endsWith('es.html')) {
        window.location.href = 'es.html';
    } else if (!lang.startsWith('es') && !currentPage.endsWith('en.html')) {
        // Cualquier otro idioma se redirige a en.html, si no estamos ya en la página en inglés
        window.location.href = 'en.html';
    }
}

loadWebsite();