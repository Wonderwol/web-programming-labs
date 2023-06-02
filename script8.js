function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-Ru');
}

function showDaysCount() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let showCount = document.getElementById('showCount');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    showCount.style.color = 'white';
    showCount.innerHTML ='Количество дней с даты рождения: ' + daysCount;

}

function clearInput() {
    let inputDate = document.querySelector('input[type=date]');
    let showCount = document.getElementById('showCount');
    inputDate.value = '';
    showCount.innerHTML = '';
}