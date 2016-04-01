var myStyles = [
	{
		'color' : '#268BD2',
		'name': 'Barot',
		'width' : 220
	}, 
	{
		'color' : '#BD3613',
		'name': 'Hassum',
		'width' : 200
	},
	{
		'color' : '#D11c24',
		'name': 'Jeniffer',
		'width' : 230
	},
	{
		'color' : '#c61c6f',
		'name': 'Richard',
		'width' : 245
	},
	{
		'color' : '#595Ab7',
		'name': 'Lorenzo',
		'width' : 205
	},
	{
		'color' : '#2176c7',
		'name': 'Xhou',
		'width' : 222
	}
	];

d3.selectAll('#chart').selectAll('div')
	.data(myStyles)
	.enter().append('div')
	.classed('item', true)
	.text(function(d) {
		return d.name;
	})
	.style({
		'color' : '#ffffff',
		'background' : function(d) {
			return d.color;
		},
		'width' : function(d) {
			return d.width + 'px';
		}
	});



