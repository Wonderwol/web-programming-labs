let flag1 = true;
function addBlocks() {
    if (flag1 == true) {
        let blocks = document.getElementById('blocks');
        for (let i = 0; i < 10; i++) {
            let block = document.createElement('div');
            block.innerHTML = 'Блок №' + (i + 1) + ': ' + (2 * (i + 1) ** 2);
            block.style.borderColor = 'white';
            block.style.width = '120px';
            block.style.borderStyle = 'solid';
            block.style.margin = '10px';
            block.style.display = 'inline-block';
            blocks.appendChild(block);
        }
    }
    flag1 = false;
}

let flag2 = true;
function showExchange() {
    if (flag2 == true) {
        let exchange = [70.5174, 70.1217, 70.0414, 70.3847, 70.5991,
                        70.8924, 71.5763, 72.8949, 72.7923, 73.6307];
        let table = document.getElementById('dollar-exchange');
        table.style.display = 'inline-block';
        for (let i = 0; i < exchange.length; i++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.innerHTML = exchange[i];
            tr.appendChild(td);
            table.appendChild(tr);
        }

        let sum = 0;
        for (let i = 0; i < exchange.length; i++) {
            sum = sum + exchange[i];
        }

        let average = sum / exchange.length;
        document.getElementById('detail').innerHTML = 'Среднее значение: ' + average;
        flag2 = false;
    }
}

let flag3 = true;

function addTransparentBlocks() {
    if (flag3 == true) {
        let tBlocks = document.getElementById('transparent-blocks');
        for (let i = 1; i < 11; i++) {
            let tBlock = document.createElement('div');
            tBlock.style.display = 'inline-block';
            tBlock.style.borderColor = 'white';
            tBlock.style.width = '20px';
            tBlock.style.borderStyle = 'solid';
            tBlock.style.margin = '10px';
            tBlock.style.opacity = i / 10 - 0.1;
            tBlock.innerHTML = i;
            tBlock.style.textAlign = 'center';
            tBlocks.appendChild(tBlock);
        }   
    }
    flag3 = false;
}

function addSpheres() {
    let spheres = document.getElementById('spheres');
    let input = document.getElementById('user-spheres');
    let userSpheres = parseInt(input.value);
    for (let i = userSpheres; i >= 1; i--) {
        let sphere = document.createElement('div');
        sphere.innerHTML = i;
        sphere.style.borderRadius = '50%';
        sphere.style.width = '100px';
        sphere.style.height = '100px';
        sphere.style.textAlign = 'center';
        sphere.style.lineHeight = '95px';
        sphere.style.color = 'black';
        sphere.style.display = 'inline-block'
        sphere.style.margin = '2px';
        if (i % 3  == 0) {
            sphere.style.backgroundColor = 'green';
        }
        if (i % 3 == 1) {
            sphere.style.backgroundColor = 'red';
        }
        if (i % 3  == 2) {
            sphere.style.backgroundColor = 'yellow';
        }
        spheres.appendChild(sphere);
    }
}

function multiTable() {
    let table = document.getElementById('table');
    for (let i = 13; i <= 33; i++) {
        let string = document.createElement('div');
        string.style.width = '120px';
        string.style.height = '20px';
        string.innerHTML = i + ' * 94 = ' + 94 * i;
        table.appendChild(string);
    }
}

function stockTable() {
    let bigTable = document.getElementById('bigTable');
    bigTable.style.color = 'white';

    //Делаем заголовки
    let header1 = document.createElement("th");
    header1.innerHTML = "Дата";
    header1.style.color = 'white';
    bigTable.appendChild(header1);

    let header2 = document.createElement("th");
    header2.innerHTML = "Цена акций";
    header2.style.color = 'green';
    bigTable.appendChild(header2);

    let header3 = document.createElement('th');
    header3.innerHTML = 'Разница';
    header3.style.color = 'red';
    bigTable.appendChild(header3); 

    //создаем таблицу и выводим в нее значения в массивах
    let stockPrice = [168.20, 164.40, 163.20, 152.00, 148.80,
                      154.10, 153.40, 158.20, 162.60, 164.40];
    let date = ['26.04.2023', '27.04.2023', '28.04.2023', '02.05.2023', '03.05.2023',
                '04.05.2023', '05.05.2023', '08.05.2023', '10.05.2023', '11.05.2023'];
    let diffrence = ['-', stockPrice[1] - stockPrice[0], stockPrice[2] - stockPrice[1], stockPrice[3] - stockPrice[2], stockPrice[4] - stockPrice[3],
                     stockPrice[5] - stockPrice[4], stockPrice[6] - stockPrice[5], stockPrice[7] - stockPrice[6], stockPrice[8] - stockPrice[7], stockPrice[9] - stockPrice[8]]
    for (let i = 0; i < stockPrice.length; i++) {
        let row = document.createElement('tr');
        let cell1 = document.createElement('td');
        cell1.innerHTML = date[i];
        cell1.style.textAlign = 'center';
        row.appendChild(cell1);
        let cell2 = document.createElement('td');
        cell2.innerHTML = stockPrice[i];
        cell2.style.textAlign = 'center';
        row.appendChild(cell2);
        let cell3 = document.createElement('td');
        if (i == 0) {
        cell3.innerHTML = diffrence[0];
        }
        else {
            diffrence[i] = diffrence[i].toFixed(2);
            cell3.innerHTML = diffrence[i];
        }
        cell3.style.textAlign = 'center';
        row.appendChild(cell3);
        bigTable.appendChild(row);
    }

        //выводим среднее значение
        let priceSum = 0;
        for (let i = 0; i < stockPrice.length; i++) {
            priceSum = priceSum + stockPrice[i];

        let stockAverage = priceSum / stockPrice.length;
        alert1 = document.getElementById('average');
        alert1.style.color = 'white';
        alert1.innerHTML = 'Среднее значение: ' + stockAverage;
    }

        //выводим минимальное значение
        let minValue = Math.min.apply(0,stockPrice);
        alert2 = document.getElementById('minValue');
        alert2.style.color = 'blue';
        alert2.innerHTML = 'Минимальное значение: ' + minValue;

        //выводим максимальное значение
        let maxValue = Math.max.apply(0, stockPrice);
        alert3 = document.getElementById('maxValue');
        alert3.style.color = 'red';
        alert3.innerHTML = 'Максимальное значение:' + maxValue;
}
