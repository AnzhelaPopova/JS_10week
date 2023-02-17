// 1
function say() {                      
    console.log ( 'Я учу JavaScript!' );
  }
  say ();

  // 2
let img1 = document.getElementById ('img1')

function getPicture() {
  img1.src='./images/1.jpg'
}

function get2Picture() {
  img1.src='./images/2.jpg'
}

// 3

function numberYear (year) {
  let message = ''
  let result = year % 4
  let result2 = year % 100
  let result3 = year % 400
  if (result <= 0) {
    if (result2 <=0 ) {
      if (result3 <=0 ) {
        message = 'Год является високосным (366 дней)'
      } else {
        message = 'Год не високосный (у него 365 дней)'
      }
    } else {
      message = 'Год является високосным (366 дней)'
    }
  } else {
    message = 'Год не високосный (у него 365 дней)'
  }
return `${year} + ${message}`
}

console.log (numberYear(2024))

