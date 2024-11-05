// a) Função swap
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

// b) Função shuffle
const shuffle = (arr, times) => {
    for (let i = 0; i < times; i++) {
        const idx1 = Math.floor(Math.random() * arr.length);
        const idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

// c) Função bubble_sort
const bubble_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
        }
    }
    return arr;
};

// d) Função selection_sort
const selection_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) minIdx = j;
        }
        if (minIdx !== i) swap(arr, i, minIdx);
    }
    return arr;
};

// e) Função quick_sort
const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotIdx = particionamento(arr, left, right);
        quick_sort(arr, left, pivotIdx - 1);
        quick_sort(arr, pivotIdx + 1, right);
    }
    return arr;
};

// f) Função particionamento
const particionamento = (arr, left, right) => {
    const pivot = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    swap(arr, i, right);
    return i;
};
