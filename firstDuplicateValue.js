function firstDuplicateValue(array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            return array[i];
        } else {
            obj[array[i]] = true;
        }
    }
    return -1;
}