d3.selectAll('.item:nth-child(3)')
	.classed({
		'highlight' : true, 
		'item' : false,
		'bigger' : true
	});

d3.selectAll('.item:nth-child(4)')
	.attr('class', 'bigger')