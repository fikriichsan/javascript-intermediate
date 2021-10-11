const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(reversed) {
    let kosong = [];
    for (let i = 0; i < reversed.length; i++){
       kosong.unshift(reversed[i])
    }
    return kosong
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

