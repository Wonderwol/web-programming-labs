function addBlocks() {
    let blocks = document.getElementById('blocks');
    for (let i = 0; i < 10; i++) {
        let block = document.createElement('div');
        block.innerHTML = 'Блок №' + (i + 1) + ': ' + (2 * (i + 1) ** 2);

        blocks.appendChild(block);
    }
}

function showExchange() {
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
}
