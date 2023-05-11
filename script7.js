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
        for (let i = 0; i < 10; i++) {
            let tBlock = document.createElement('div');
            tBlock.style.borderColor = 'white';
            tBlock.style.width = '20px';
            tBlock.style.borderStyle = 'solid';
            tBlock.style.margin = '10px';
            tBlock.style.opacity = i / 10;
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