function addBlocks() {
    let blocks = document.getElementById('blocks');
    for (let i = 0; i < 10; i++) {
        let block = document.createElement('div');
        block.innerHTML = 'Блок №' + (i + 1) + ': ' + (2 * (i + 1) ** 2);

        blocks.appendChild(block);
    }
}
