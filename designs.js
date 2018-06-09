// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
colorSelected = $("#colorPicker").val();
let row, column, paint;

function makeGrid(row, column) {
    //Takes the input rows,column and creates a table with the specifications.
    let cell, currentRow;
    table = document.getElementById("pixelCanvas");
    previousRow = document.getElementById("pixelCanvas").rows.length;
    //delete the previous table if it was created.
    if (previousRow > 0) {
        for (let i = previousRow - 1; i >= 0; i--) {
            table.deleteRow(i);
        }
    }
    //Create the table and give each cell the class "cellcolor".
    for (let i = 0; i <= row - 1; i++) {
        currentRow = table.insertRow(i);
        for (j = 0; j <= column - 1; j++) {
            currentCell = currentRow.insertCell(j);
            currentCell.setAttribute("class", "cellcolor");
        }
    }

}
$("#sizePicker").on("submit", function(evt) {
    //Call the makeGrid() function when the user clicks on submit and pass the arguments.
    evt.preventDefault();
    row = $("#inputHeight").val();
    column = $("#inputWeight").val();
    makeGrid(row, column, colorSelected);
});
$("#pixelCanvas").on("mousedown", ".cellcolor", function() {
    //Change the color of the selected cell by adding the class "cellcolor" 
    colorSelected = $("#colorPicker").val();
    $(this).css("background-color", colorSelected);
});

