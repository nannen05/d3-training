d3.selectAll('.item:nth-child(3)')
	.classed({
		'highlight' : true, 
		'item' : false,
		'bigger' : true
	});

d3.selectAll('.item:nth-child(4)')
	.attr('class', 'bigger')

d3.selectAll('.item:nth-child(5)')
	.style({
		'padding' : '10px',
		'margin' : '5px',
		'color' : '#EEE8D5'		
		})


var myStyles = [
	{
		'color' : '#268BD2',
		'width' : 220
	}, 
	{
		'color' : '#BD3613',
		'width' : 200
	},
	{
		'color' : '#D11c24',
		'width' : 230
	},
	{
		'color' : '#c61c6f',
		'width' : 245
	},
	{
		'color' : '#595Ab7',
		'width' : 205
	},
	{
		'color' : '#2176c7',
		'width' : 222
	}
	];

d3.selectAll('.item')
	.data(myStyles)
	.style({
		'color' : '#ffffff',
		'background' : function(d) {
			return d.color;
		},
		'width' : function(d) {
			return d.width + 'px';
		}
	});



