let arr = [1,2,3,4,5,6,7,8,9,0]

function oddSync(array) {
  return array.filter(n => n % 2)
}

console.log("Before")
console.log(oddSync(arr))
console.log("After")
