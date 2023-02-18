/* global variable part*/ 

let serial = 0;

/* triangle card part */ 

document.getElementById('triangle-btn').addEventListener('click', function(){
    serial += 1;
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const triangleFirstInputField = document.getElementById('triangle-first-input-field').value;
    const triangleSecondInputField = document.getElementById('triangle-second-input-field').value;

     /* empty input field */ 

    document.getElementById('triangle-first-input-field').value = '';
    document.getElementById('triangle-second-input-field').value = '';


    /* validation part */ 

    if ( isNaN(triangleFirstInputField) ||
        isNaN(triangleSecondInputField) ||
        triangleFirstInputField == "" ||
        triangleSecondInputField == "" ||
        triangleFirstInputField < 0 ||
        triangleSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
      /* triangle multiplication part */ 

    const TriangleMultiplication =  0.5 * parseFloat(triangleFirstInputField) * parseFloat(triangleSecondInputField);
    const newTriangleMultiplication = TriangleMultiplication.toFixed(2);

    /* create td common function call part */ 

    displayData(triangleTitle, newTriangleMultiplication);

})

/* rectangle card part */ 

document.getElementById('rectangle-btn').addEventListener('click', function(){
    serial += 1;
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    const rectangleFirstInputField = document.getElementById('rectangle-first-input-field').value;
    const rectangleSecondInputField = document.getElementById('rectangle-second-input-field').value;

    /* empty input field */ 

    document.getElementById('rectangle-first-input-field').value = '';
    document.getElementById('rectangle-second-input-field').value = '';

    /* validation part */ 

    if ( isNaN(rectangleFirstInputField) ||
        isNaN(rectangleSecondInputField) ||
        rectangleFirstInputField == "" ||
        rectangleSecondInputField == "" ||
        rectangleFirstInputField < 0 ||
        rectangleSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
    /* rectangle multiplication part */   

    const rectangleMultiplication = parseFloat(rectangleFirstInputField) * parseFloat(rectangleSecondInputField);
    const newRectangleMultiplication = rectangleMultiplication.toFixed(2);

     /* create td common function call part */ 

    displayData(rectangleTitle, newRectangleMultiplication);
})

/* parallelogram card part */ 

document.getElementById('parallelogram-btn').addEventListener('click', function(){
    serial += 1;
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    const parallelogramFirstInputField = document.getElementById('parallelogram-first-input-field').value;
    const parallelogramSecondInputField = document.getElementById('parallelogram-second-input-field').value;

    /* empty input field */ 

    document.getElementById('parallelogram-first-input-field').value = '';
    document.getElementById('parallelogram-second-input-field').value = '';

    /* validation part */ 

    if ( isNaN(parallelogramFirstInputField) ||
        isNaN(parallelogramSecondInputField) ||
        parallelogramFirstInputField == "" ||
        parallelogramSecondInputField == "" ||
        parallelogramFirstInputField < 0 ||
        parallelogramSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
    /* parallelogram multiplication part*/   
      
    const parallelogramMultiplication = parseFloat(parallelogramFirstInputField) * parseFloat(parallelogramSecondInputField);
    const newParallelogramMultiplication = parallelogramMultiplication.toFixed(2);

     /* create td common function call part */ 

    displayData(parallelogramTitle, newParallelogramMultiplication);
})

/* rhombus card part */ 

document.getElementById('rhombus-btn').addEventListener('click', function(){
    serial += 1;
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    const rhombusFirstInputField = document.getElementById('rhombus-first-input-field').value;
    const rhombusSecondInputField = document.getElementById('rhombus-second-input-field').value;

    /* empty input field */ 

    document.getElementById('rhombus-first-input-field').value = '';
    document.getElementById('rhombus-second-input-field').value = '';

    /* validation part */ 

    if ( isNaN(rhombusFirstInputField) ||
        isNaN(rhombusSecondInputField) ||
        rhombusFirstInputField == "" ||
        rhombusSecondInputField == "" ||
        rhombusFirstInputField < 0 ||
        rhombusSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
    /* rhombus multiplication part */   

    const rhombusMultiplication = 0.5 * parseFloat(rhombusFirstInputField) * parseFloat(rhombusSecondInputField);
    const newRhombusMultiplication = rhombusMultiplication.toFixed(2);
    
    /* create td common function call part */

    displayData(rhombusTitle, newRhombusMultiplication);
})

/* pentagon card part */ 

document.getElementById('pentagon-btn').addEventListener('click', function(){
    serial += 1;
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    const pentagonFirstInputField = document.getElementById('pentagon-first-input-field').value;
    const pentagonSecondInputField = document.getElementById('pentagon-second-input-field').value;

    /* empty input field */ 

    document.getElementById('pentagon-first-input-field').value = '';
    document.getElementById('pentagon-second-input-field').value = '';

    /* validation part */ 

    if ( isNaN(pentagonFirstInputField) ||
        isNaN(pentagonSecondInputField) ||
        pentagonFirstInputField == "" ||
        pentagonSecondInputField == "" ||
        pentagonFirstInputField < 0 ||
        pentagonSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
    /* pentagon multiplication part */   

    const pentagonMultiplication = 0.5 * parseFloat(pentagonFirstInputField) * parseFloat(pentagonSecondInputField);
    const newPentagonMultiplication = pentagonMultiplication.toFixed(2);

    /* create td common function call part */ 

    displayData(pentagonTitle, newPentagonMultiplication);
})

/* ellipse card part */ 

document.getElementById('ellipse-btn').addEventListener('click', function(){
    serial += 1;
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    const ellipseFirstInputField = document.getElementById('ellipse-first-input-field').value;
    const ellipseSecondInputField = document.getElementById('ellipse-second-input-field').value;

    /* empty input field */ 

    document.getElementById('ellipse-first-input-field').value = '';
    document.getElementById('ellipse-second-input-field').value = '';

    /* validation part */ 

    if ( isNaN(ellipseFirstInputField) ||
        isNaN(ellipseSecondInputField) ||
        ellipseFirstInputField == "" ||
        ellipseSecondInputField == "" ||
        ellipseFirstInputField < 0 ||
        ellipseSecondInputField < 0 
      ) {
        return alert("Please enter a valid number");
      }
    
    /* ellipse multiplication part*/   

    const ellipseMultiplication = 3.14 * parseFloat(ellipseFirstInputField) * parseFloat(ellipseSecondInputField);
    const newEllipseMultiplication = ellipseMultiplication.toFixed(2);

    /* create td common function call part */ 

    displayData(ellipseTitle, newEllipseMultiplication);
})

/* card random color part */ 

const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const card4 = document.getElementById('card-4');
const card5 = document.getElementById('card-5');
const card6 = document.getElementById('card-6');

/* card random color call common function part */ 

addRandomColorOnHover(card1);
addRandomColorOnHover(card2);
addRandomColorOnHover(card3);
addRandomColorOnHover(card4);
addRandomColorOnHover(card5);
addRandomColorOnHover(card6);

/*blog button part*/ 

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html'
})
  