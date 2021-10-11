const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, num) {
      let newArr = [];
      arr.map((baris) => {
          baris.map((kolom) => {
              newArr.push(kolom)
          })
      } )
      let cariData = newArr.indexOf(num)
      if (cariData === -1){
          return 'NULL'
      } else {
          return cariData
      }
  }

  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));
  