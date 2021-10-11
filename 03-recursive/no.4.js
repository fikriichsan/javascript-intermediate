function trianglePattern(a, b) {
    let kosong = "";
    if (a === 0) {
        return a;
    }
    for (let i = 0; i < b; i++) {
        if (i < a - 1) {
            kosong = kosong + " " 
        }else{
            kosong = kosong + String.fromCharCode(64 + (b - a + (i - a) + 2))
        }
    }
    console.log(kosong)
    return trianglePattern(a - 1, b)
  }
  
trianglePattern(5, 5);