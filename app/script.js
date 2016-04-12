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

d3.select('#chart-01')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', "#93a1a1")
	.append('rect')
		.attr('x', 200)
		.attr('y', 100)
		.attr('width', 200)
		.attr('height', 200)
		.style('fill', "#cb4b19")
	d3.select('svg')
		.append('circle')
		.attr('cx', '300')
		.attr('cy', '200')
		.attr('r', 50)
		.style('fill', '#840043')

var bardata = [20, 30, 45, 105, 50, 220];

var height = 400,
	width = 600,
	barWidth = 50,
	barOffset = 5;

var yScale = d3.scale.linear()
	.domain([0, d3.max(bardata)])
	.range([0, height])

d3.select('#chart-02').append('svg')
	.attr('width', width)
	.attr('height', height)
	.style('background', '#c9d7d6')
	.selectAll('rect').data(bardata)
	.enter().append('rect')
		.style('fill' , '#c61c6f')
		.attr('width', barWidth)
		.attr('height', function(d) {
			return yScale(d);
		})
		.attr('x' , function(d,i) {
			return i * (barWidth + barOffset);
		})
		.attr('y', function(d) {
			return height - yScale(d);
		})

