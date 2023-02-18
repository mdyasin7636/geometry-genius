function displayData(geometryTitle, geometryMultiplication){
    const areaCalculationBody = document.getElementById('area-calculation-body')
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${geometryTitle}</td>
    <td>${geometryMultiplication}cm<sup>2</sup></td>
    <td><button class="btn btn-sm btn-primary">Convert to m<sup>2</sup></button></td>
    
    `
    areaCalculationBody.appendChild(tr)
    
}

function addRandomColorOnHover(element) {
    element.addEventListener('mouseenter', function() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      element.style.backgroundColor = "#" + randomColor;
    });
  
    element.addEventListener('mouseleave', function() {
      element.style.backgroundColor = "";
    });
  }