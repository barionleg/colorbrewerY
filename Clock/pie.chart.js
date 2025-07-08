let template = document.querySelector('template.sentiment');
let svg = template.content.querySelector('svg');

let colors = ['#9575CD', '#5E35B1', '#311B92'];
let radius = (this.root.clientWidth * 0.80) / 2;
let rotation = 0;
let slices = [
    (value.negative / value.total) * 100,
    (value.nuetral / value.total) * 100,
    (value.positive / value.total) * 100
];

for (let s = 0; s < slices.length; s++) {
    let x = Math.cos((2 * Math.PI) / (100 / slices[s]));
    let y = Math.sin((2 * Math.PI) / (100 / slices[s]));
    let arc = (slices[s] <= 50) ? 0 : 1;
    let d = `M${radius},${radius} L${radius},0, A${radius},${radius} 0 ${arc},1 ${radius + y * radius},${radius - x * radius} z`;

    let pie = document.createElementNS(List.SVG_NS, 'path');
    pie.setAttributeNS(null, 'fill', colors[s]);
    pie.setAttributeNS(null, 'd', d);
    pie.setAttributeNS(null, 'transform', `rotate(${rotation} ${radius} ${radius})`);
    svg.appendChild(pie);

    rotation = rotation + ((slices[s] / 100) * 360);
}

let clone = document.importNode(template.content, true);
this.root.appendChild(clone);
