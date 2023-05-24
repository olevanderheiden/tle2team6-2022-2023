//todo: add later in the scratch.js file!!

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('hidden-if-new').style.display = 'none';
})


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

document.getElementById('image').addEventListener('change', (e) => {
    document.getElementById('preview-image').src = e.target.value
})

document.getElementById('average-shelf-life-type').addEventListener('change', (e) => {
    document.getElementById('date-notation').innerHTML = `dagen tot ${e.target.value}-datum`
})