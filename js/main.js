document.getElementById('triangle-btn').addEventListener('click', function(){
   
    const geometryElement = document.getElementById('geometry-element').innerText;
    const triangleFirstInputField = document.getElementById('triangle-first-input-field').value;
    const triangleSecondInputField = document.getElementById('triangle-second-input-field').value;

    const TriangleMultiplication =  0.5 * parseFloat(triangleFirstInputField) * parseFloat(triangleSecondInputField);
    const newTriangleMultiplication = TriangleMultiplication.toFixed(2)
    console.log(newTriangleMultiplication)
    
    
    const areaCalculationBody = document.getElementById('area-calculation-body')
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${geometryElement}</td>
    <td>${newTriangleMultiplication}</td>
    
    `
    areaCalculationBody.appendChild(tr)
    
    
})