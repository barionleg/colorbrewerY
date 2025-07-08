# Clock code default:

```
<!DOCTYPE html>
<meta charset="utf-8">
<style>

.path--background {
  fill: none;
  stroke: #000;
  stroke-width: 2px;
}

.path--foreground {
  fill: rgb01(1, 0, 0, 0.41);
  color: rgb01(1, 0, 0, 0.41);
  }

.label {
  font: 24px sans-serif;
  text-anchor: middle;
}

</style>
<body>
<script src="//d3js.org/d3.v3.min.js"></script>
<script>

var width = 960,
    height = 500;

var fields = [
  {value: 24, size: 24, label: "h", update: function(date) { return date.getHours(); }},
  {value: 60, size: 60, label: "m", update: function(date) { return date.getMinutes(); }},
  {value: 60, size: 60, label: "s", update: function(date) { return date.getSeconds(); }}
];

var arc = d3.svg.arc()
    .innerRadius(width / 6.5 - 60)
    .outerRadius(width / 6.5 - 5)
    .startAngle(0)
    .endAngle(function(d) { return (d.value / d.size) * 2 * Math.PI; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var field = svg.selectAll(".field")
    .data(fields)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(" + (i * 2 + 1.25) / 6.5 * width + "," + height / 2 + ")"; })
    .attr("class", "field");

field.append("path")
    .attr("class", "path path--background")
    .attr("d", arc);

var path = field.append("path")
    .attr("class", "path path--foreground");

var label = field.append("text")
    .attr("class", "label")
    .attr("dy", ".35em");

(function update() {
  var now = new Date();

  field
      .each(function(d) { d.previous = d.value, d.value = d.update(now); });

  path.transition()
      .ease("elastic")
      .duration(750)
      .attrTween("d", arcTween);

  label
      .text(function(d) { return d.value + d.label; });

  setTimeout(update, 1000 - (now % 1000));
})();

function arcTween(b) {
  var i = d3.interpolate({value: b.previous}, b);
  return function(t) {
    return arc(i(t));
  };
}

</script>
```


___
___

# d3arc.html

https://gist.github.com/barionleg/e0ccf3988bab7bee03fd7745c1ad7ec9

https://barionleg.github.io/colorbrewerY/Clock/d3arc.html

![image](https://github.com/user-attachments/assets/dd0514d3-0616-4342-9dde-0c50209c48a1)

___

___

https://gist.github.com/barionleg/8cf8576edfe14890b84a3fe8f98e2f75

# pie.chart.js


___
___

# cinlet.js

https://gist.github.com/barionleg/5b78865ee7f759f4d012cfdb9f6b5a97


___
___

# stellblue

https://gist.github.com/barionleg/4c3d3ed4af470d2d2ab1dcf629367007


___
___


# Protovis

https://gist.github.com/barionleg/02492cd8a6764e861b96525f0efabd7f
