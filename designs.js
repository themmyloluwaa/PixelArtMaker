// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var sizePicker = document.getElementById('sizePicker');
var inputHeight = document.getElementById('inputHeight').value;
var inputWidth = document.getElementById('inputWidth').value;
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', (e) =>{
    e.preventDefault();
    makeGrid(inputHeight,inputWidth)
})
function makeGrid(x, y) {

// Your code goes here!
// tr.remove();
var pixelCanvas = document.getElementById('pixelCanvas');

// for (i = 1; i <= x.length; i++){
//    var tr =  document.createElement('li');
//    tr.id = "table";
//    pixelCanvas.appendChild(tr);
//     for(j =1; j<= y.length; j++){
//         var td = document.createElement('td');
//         tr.appendChild(td)
        
//     }
    
// }
for (let i = 1; i <= x.length; i++){
    let tr =  document.createElement('li');
    tr.id = "table";
    pixelCanvas.appendChild(tr);
     for(let j =1; j<= y.length; j++){
         let td = document.createElement('td');
         tr.appendChild(td)
         
     }
}
}
