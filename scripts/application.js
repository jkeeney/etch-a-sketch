$(document).ready(function () {
	displayGrid(16);
	
	$('.squares').on('mouseenter', function(){
		$(this).css('background-color', 'orange');
	});
	
	$('#clrbtn').on('click', function(){
		newGrid();
		
		$('.squares').on('mouseenter', function(){
			$(this).css('background-color', 'orange');
		});
	});
	
});

function displayGrid(gridSize){
	var size = 600;
	var boxsize = (600 - 2*gridSize)/gridSize;
	var container = $('#container').html('');
	
	for (var i = 0; i < gridSize; i++) {
		
		for (var j = 0; j < gridSize; j++) {
			container.append( $('<div></div>').addClass('squares').height(boxsize).width(boxsize) );
		}
		
		container.append($('<div></div>').css('clear', 'both').css('margin-top', '-4px'));
		
	}
}

function newGrid() {
		var newSize = prompt('Enter new grid size:');
		displayGrid(newSize);
		$('.squares').css('background-color', '#404040');
	}