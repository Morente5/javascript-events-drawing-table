function loadCanvas(parent) {
	var table = document.createElement('table');
	table.id = 'canvas';
	table.style.borderCollapse = 'collapse';
	document.body.appendChild(table);

	for (var i = 0; i < 200; i++) {
		var row = document.createElement('tr');
		for (var j = 0; j < 500; j++) {
			var cell = document.createElement('td');
			cell.className = "cell";
			row.appendChild(cell);
			cell.addEventListener('mousemove', function(event) {
				if (!!event.ctrlKey) {
					event.target.style.backgroundColor = 'red';
				}
				else if (!!event.shiftKey) {
					event.target.style.backgroundColor = 'blue';
				}
				else if (!!event.altKey) {
					event.target.style.backgroundColor = null;
				}
			});
		}
		table.appendChild(row);
	}

	var clearButton = document.createElement('button');
	clearButton.innerHTML = 'Clear';
	document.body.appendChild(clearButton);

	clearButton.addEventListener("click", function() {
		var cells = document.getElementsByClassName('cell');
		for (let i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = null;
		}
	});
}
 
window.onload = function() {
	loadCanvas(document.body);
};