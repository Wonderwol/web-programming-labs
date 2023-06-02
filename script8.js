function showDate() {
    let out1= document.getElementById('current-date1');
    let out2= document.getElementById('current-date2');
    let out3= document.getElementById('current-date3');
    let out4= document.getElementById('current-date4');
    let out5= document.getElementById('current-date5');
    let out6= document.getElementById('current-date6');
    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-Ru');
    out2.innerHTML = 'Дата и время для канадской локали: ' + today.toLocaleString('en-Ca');
    out3.innerHTML = 'Дата и время для немецкой локали: ' + today.toLocaleString('de-DE');
    out4.innerHTML = 'Дата и время для испанской локали: ' + today.toLocaleString('es-ES');
    out5.innerHTML = 'Дата и время для арабской локали: ' + today.toLocaleString('ar-AE');
    out6.innerHTML = 'Дата и время для татарской локали: ' + today.toLocaleString('tt-Ru');
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

function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-Ru');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 0.1)