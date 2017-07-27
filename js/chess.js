/*document.querySelector(".height").value;*/

/*var colm = document.querySelector('.height').value;
var row = document.querySelector('.width').value;
var symb = document.querySelector('.symbol').value;*/

var creatRow = function(x,y) {
    var symb = document.querySelector('.symbol').value;
    var colm = document.querySelector('.width').value;
    var newRow = document.createElement('div');
        newRow.className = 'row';

            function createColumn() {
                symbContainer = document.createElement('div');
                symbContainer.className = 'line';
                symbContainer.innerHTML = symb
                symbContainer.style.marginRight = (x+'px');
                symbContainer.style.marginLeft = (y+'px');
            };


            function createLine() {
                createColumn();
                newRow.appendChild(symbContainer);

            };

            for (var z = 0; z < colm; z++) {
                createLine();
                document.body.appendChild(newRow);
            };
};
document.querySelector('.submit').onclick = function() {
    var row = document.querySelector('.height').value;
        for (k = 1; k < row; k++) {
            if (k % 2 == 0) {
                    creatRow(5,0);
            } 
                else {   
                    creatRow(0,5);
            }
        };
    };