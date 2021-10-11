const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let hasil = arr.reduce((total, value) => {
        return total + value
    })
    hasil = hasil / arr.length
    let filterArr = arr.filter((item)=>{
        return item > hasil;
    })
    return filterArr.length
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))