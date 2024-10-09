function insertionSort(ar) {

    for (i = 1; i < ar.length; i++) {
        var value = ar[i];
        var j = i - 1;
        while (j >= 0 && ar[j] > value) {
            ar[j + 1] = ar[j];
            j = j - 1;
        }
        ar[j + 1] = value;
    }
    return ar;
}

//get input for ar
arr = [4, 1, 3, 5, 6, 2];

//print ar
let result = insertionSort(arr)
console.log(result.join(' '))

