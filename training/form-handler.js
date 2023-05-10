//todo: add later in the scratch.js file!!

const productSelector = document.getElementById('product');
const sizeTypeSelector = document.getElementById('size-type');
const sizeInput = document.getElementById('size');

productSelector.addEventListener('change', (e) => {
    if (e.target.value === 'new') {
        document.getElementById('hidden-if-new').style.display = 'none';
        document.getElementById('hidden-if-existing').style.display = 'block';
    } else {
        document.getElementById('hidden-if-new').style.display = 'block';
        document.getElementById('hidden-if-existing').style.display = 'none';
    }
})

sizeTypeSelector.addEventListener('change', (e) => {
    document.getElementById('size-notation').innerHTML = e.target.value
    UpdateReadableSize()
})

document.getElementById('size').addEventListener('change', UpdateReadableSize)

function UpdateReadableSize() {
    if (sizeTypeSelector.value === 'ML') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}L)`
    } else if (sizeTypeSelector.value === 'Gram') {
        document.getElementById('readable-size').innerHTML = ` (= ${sizeInput.value / 1000}KG)`
    }
}

document.getElementById('date-type').addEventListener('change', (e) => {
    document.getElementById('date-notation').innerHTML = `dagen tot ${e.target.value}-datum`
})

let product = {
    'category': document.getElementById('product-category').value,
    'brand': document.getElementById('brand').value,
    'name': document.getElementById('name').value,
    'size-type': document.getElementById('size-type').value,
    'size': document.getElementById('size').value,
    'date-type': document.getElementById('date-type').value,
    'best-before-time': document.getElementById('best-before-time').value,
}