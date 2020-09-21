let fruit = ['grape', 'plum', 'apricot'];
let veg = ['pea', 'asparagus', 'carrot'];
let cheese = ['cheddar', 'brie', 'colby'];

function init(s) {
	return s[0];
}
console.log(fruit.map(init));

let f = fruit.map(x => x.length);
console.log(f);

veg.sort(function(x, y) {
    x_last = x[x.length - 1];
    y_last = y[y.length - 1];
    if (x_last > y_last) {
        return -1;
    } else if (x_last < y_last) {
        return 1;
    } else {
        return 0;
    }
});
console.log(veg);

cheese.sort((a, b) => {
    return b.length - a.length;
});
console.log(cheese);


