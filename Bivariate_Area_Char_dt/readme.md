This two-value area chart is constructed from a TSV file storing the daily high and low temperature in San Francisco over the last two years. Data is from the [National Climatic Data Center](http://www.ncdc.noaa.gov/). The chart employs [conventional margins](http://bl.ocks.org/3019563) and a number of D3 features:

* [d3.tsv](https://github.com/mbostock/d3/wiki/CSV) - load and parse data
* [d3.time.format](https://github.com/mbostock/d3/wiki/Time-Formatting) - parse dates
* [d3.time.scale](https://github.com/mbostock/d3/wiki/Time-Scales) - *x*-position encoding
* [d3.scale.linear](https://github.com/mbostock/d3/wiki/Quantitative-Scales) - *y*-position encoding
* [d3.extent](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_extent), [d3.min](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_min) and [d3.max](https://github.com/mbostock/d3/wiki/Arrays#wiki-d3_max) - compute domains
* [d3.svg.axis](https://github.com/mbostock/d3/wiki/SVG-Axes) - display axes
* [d3.svg.area](https://github.com/mbostock/d3/wiki/SVG-Shapes#wiki-area) - display area shape
