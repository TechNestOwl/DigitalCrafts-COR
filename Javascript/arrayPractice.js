// function tureValue(booleans) {
//     let value = 0;
//     booleans.forEach(function (booleans) {
//       if (booleans == true) {
//         value += 1;
//       }
//     });
//     return value;
//   }
//   console.log(tureValue("true", 1, true, false));



function trueValue (booleans) {
    let value = 0
    booleans.forEach(function(boolean){
        if (boolean === true) {
            value += 1
        }
    })
    return value
}

console.log(trueValue(["true", 1, true, false]))