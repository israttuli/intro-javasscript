var items = 10;
while (items > -1) {
    // console.log(items);
    items--
    if (items == 3)
        break;
}

var tableItems = ['book', 'pen', 'laptop', 'keyboard'];

for (var i = 0; i < tableItems.length; i++) {
    var tableItem = tableItems[i];
    if (tableItem == 'laptop') {
        break;
    }
    console.log(tableItem);
}

var tableItems = ['book', 'pen', 'laptop', 'keyboard'];

for (var i = 0; i < tableItems.length; i++) {
    var tableItem = tableItems[i];

    if (tableItem == 'pen') {
        continue;
    }
    console.log(tableItem);
}
// console.log(typeof tableItem);




