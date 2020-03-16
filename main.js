// setTimeout
// serInterval



// setTimeout(function() {
//     document.write(`<h2>setTimeout</h2>`);
// }, 1000);


// setInterval(function() {
//     document.write(`<h2>setInterval</h2>`);
// }, 2000);


// let box = document.querySelector('.box');


// function add() {
//     let h2 = document.createElement('h2');
//     h2.innerText = 'Set Interval';
//     box.appendChild(h2);
//     if(box.children.length == 5) {
//         clearInterval(startInterval);
//     }
// }

// let startInterval = setInterval(add, 1000);



//методи для діставання часу
// let date = new Date();

// console.log(date)

// console.log('getDay', date.getDay());
// console.log('getDate', date.getDate());
// console.log('getMonth', date.getMonth());
// console.log('getYear', date.getYear());
// console.log('getFullYear', date.getFullYear());
// console.log('getHours', date.getHours());
// console.log('getMinutes', date.getMinutes());
// console.log('getSeconds', date.getSeconds());
// console.log('getMilliseconds', date.getMilliseconds());



//виводить день тиждня 
// let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];

// function number(date) {
//   return days[date.getDay()];
// }
// let date = new Date();
// alert(number(date));


// то саме 
// let date = new Date();
// let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
// console.log(days[date.getDay()]);



// let startDate = new Date(2020, 12, 31, 23, 59, 59);
// console.log(startDate.getUTCHours());






let startClock = setInterval(function() {
    let date = new Date();
    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    if(hours < 10) hours = '0' + hours;
     if(minutes < 10) minutes = '0' + minutes;
      if(seconds < 10) seconds = '0' + seconds;
    let el = document.getElementById('text');
    el.innerHTML = hours + ':' + minutes + ":" + seconds;
}, 1000)

function startInterval() {
    
}
document.querySelector('.stopclock').addEventListener('click',
function() {
    clearInterval(startClock)
})



document.querySelector('.startclock').addEventListener('click', 
function() {
    startClock = setInterval(startInterval, 1000);
});





