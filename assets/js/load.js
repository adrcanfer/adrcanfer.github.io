
function getNavLanguage() {
    var lang = navigator.language || navigator.userLanguage;
    return lang.toLowerCase();
}

function loadWebsite() {
    var lang = getNavLanguage();

    // Verificar si el idioma es español
    if (lang.startsWith('es')) {
        window.location.href = 'es.html';
    } else {
        // Cualquier otro idioma se redirige a en.html
        window.location.href = 'en.html';
    }
}

loadWebsite();