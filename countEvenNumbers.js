function countEvenNumbers(numbers) {
    let evenCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenCount++;
        }
    }
    return evenCount;
}