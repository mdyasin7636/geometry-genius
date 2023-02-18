document.getElementById('triangle-btn').addEventListener('click', function(){
   
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const triangleFirstInputField = document.getElementById('triangle-first-input-field').value;
    const triangleSecondInputField = document.getElementById('triangle-second-input-field').value;

    const TriangleMultiplication =  0.5 * parseFloat(triangleFirstInputField) * parseFloat(triangleSecondInputField);
    const newTriangleMultiplication = TriangleMultiplication.toFixed(2);

    displayData(triangleTitle, newTriangleMultiplication);
})

document.getElementById('rectangle-btn').addEventListener('click', function(){
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    const rectangleFirstInputField = document.getElementById('rectangle-first-input-field').value;
    const rectangleSecondInputField = document.getElementById('rectangle-second-input-field').value;

    const rectangleMultiplication = parseFloat(rectangleFirstInputField) * parseFloat(rectangleSecondInputField);
    const newRectangleMultiplication = rectangleMultiplication.toFixed(2);

    displayData(rectangleTitle, newRectangleMultiplication);
})

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const parallelogramFirstInputField = document.getElementById('parallelogram-first-input-field').value;
    const parallelogramSecondInputField = document.getElementById('parallelogram-second-input-field').value;

    const parallelogramMultiplication = parseFloat(parallelogramFirstInputField) * parseFloat(parallelogramSecondInputField);
    const newParallelogramMultiplication = parallelogramMultiplication.toFixed(2);

    displayData(parallelogramTitle, newParallelogramMultiplication);
})

document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    const rhombusFirstInputField = document.getElementById('rhombus-first-input-field').value;
    const rhombusSecondInputField = document.getElementById('rhombus-second-input-field').value;

    const rhombusMultiplication = 0.5 * parseFloat(rhombusFirstInputField) * parseFloat(rhombusSecondInputField);
    const newRhombusMultiplication = rhombusMultiplication.toFixed(2);

    displayData(rhombusTitle, newRhombusMultiplication);
})


document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const pentagonFirstInputField = document.getElementById('pentagon-first-input-field').value;
    const pentagonSecondInputField = document.getElementById('pentagon-second-input-field').value;

    const pentagonMultiplication = 0.5 * parseFloat(pentagonFirstInputField) * parseFloat(pentagonSecondInputField);
    const newPentagonMultiplication = pentagonMultiplication.toFixed(2);

    displayData(pentagonTitle, newPentagonMultiplication);
})


document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const ellipseFirstInputField = document.getElementById('ellipse-first-input-field').value;
    const ellipseSecondInputField = document.getElementById('ellipse-second-input-field').value;

    const ellipseMultiplication = 3.14 * parseFloat(ellipseFirstInputField) * parseFloat(ellipseSecondInputField);
    const newEllipseMultiplication = ellipseMultiplication.toFixed(2);
    ellipseFirstInputField.value = '';
    ellipseSecondInputField.value = '';

    displayData(ellipseTitle, newEllipseMultiplication);
})

function displayData(geometryTitle, geometryMultiplication){
    const areaCalculationBody = document.getElementById('area-calculation-body')
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${geometryTitle}</td>
    <td>${geometryMultiplication}cm<sup>2</sup></td>
    
    `
    areaCalculationBody.appendChild(tr)
    
}