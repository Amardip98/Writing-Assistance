// Shared functions
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Page-specific scripts will call these