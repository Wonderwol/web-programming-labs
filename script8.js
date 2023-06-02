function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-Ru');
}