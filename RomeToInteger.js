function romanToInteger(roman) {
    var result = 0;
    var romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var romanArray = roman.split('');
    for (var i = 0; i < romanArray.length; i++) {
        var current = romanArray[i];
        var next = romanArray[i + 1];
        if (romanMap[current] < romanMap[next]) {
            result -= romanMap[current];
        } else {
            result += romanMap[current];
        }
    }
    return result;
}