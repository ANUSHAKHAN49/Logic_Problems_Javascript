// Question 1
let car = {
  make: " Honda Civic",
  model: "Brand New",
  year: 2020,
}
console.log(car.model)

// Question 2
// 
var MyArr = [20,25,26,24]
for (let i = 0; i < MyArr.length; i++) {
  console.log(MyArr[i]);
}

// Question 3
let array = [10, 20, 30, 40, 50]
const sumofArray = array.reduce((a, b) => {
  return a + b
})
console.log(sumofArray)
// Question 4
const currentDate = new Date(); 
const currentYear = currentDate.getFullYear(); 

console.log(currentYear); 

// Question 5
function elsestatement() {
  let i = -4
  if (i > 0) {
    return "positive"
  }
  else if (i < 0) {
    return "Negative"
  }
  if (i = 0) {
    return "Zero"
  }

}
let answer = elsestatement()
console.log(answer)

// Question 6
var num = 0;
while (num < 5) {
  num++;
  console.log(num)
}

// Question 7

var a = 6
console.log(Math.sqrt(a))

// Question 8
var a = [1, 2, 3, 4, 5, 6, 7, 8]
let filtereven = () => {
  return a
    .filter(a => a % 2 === 0)

}
console.log(filtereven())

// Question 9
function multiplydefault(a, b = 10) {
  return a * b
}
console.log(multiplydefault(10))
// console.log(multiplydefault(10,5))


// Question 10
let num1 = 2
let num2 = 6
let add = num1 + num2
let sub = num1 - num2
let multiply = num1 / num2
let divide = num1 * num2
console.log(add, sub, multiply, divide)

// Question 11
function studentsgrade() {
  let marks = 49

  if (marks >= 90) {
    return "A"
  }
  else if (marks >= 70) {
    return "B"
  }
  if (marks >= 50) {
    return "C"
  }

  else (marks < 50)
  {
    return "ap fail hu! juniors k sath hi rahu"
  }


}
let grade = studentsgrade()
console.log(grade)

//Question 12
let aarr = [1, 2, 3, 4, 5, 6, 7, 8]
let b = aarr.length
console.log(b)

// Question 13

var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);


  if (n[i] === 5) {
    break
  }


}



// Question 14
var Comperison = function (a, b) {
  if (a < b) {
    return "true"
  }
  else if (b > a) {
    return "false"
  }
}
var campare = Comperison(28, 29)
console.log(campare)

// Question 15
const day = 1;
switch (day) {
  case 0:
    console.log("Sunday....it's rest time")
  case 1:
    console.log("Yup!..Monday .^.")
    break
  case 2:
    console.log("It's Tuesday..work alot")
    break
  case 3:
    console.log("Wednesday bro!!..keep working")
    break
  case 4:
    console.log("Thursday :)")
    break
  case 5:
    console.log("Friday ..yahh it's end of the week")
    break
  case 6:
    console.log("Saturday..Oh!finally end now")
    break



}