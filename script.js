// let number = 47;
// let name = "Картон";
// let game = "Wur_Thunder";
// console.log(number);



// let title = document.querySelector("h1")
// let img1 = document.querySelector('.header_img')
// let img2 = document.querySelector('img')
// title.textContent += "Hello"
// title.style.color = "red"


// function fun1(){
//     alert("hoi4")
// }
// title.addEventListener('click', fun1)

// function img(){
//     alert("Hearts of iron 4")
// }
// img1.addEventListener('click', img)
// function img2(){
//     alert("Bob")
// }
// img3.addEventListener('click', img2)
let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.header__nav')
burger.addEventListener('click', function(){
    burger.classList.toggle('active')
    nav.classList.toggle('active')

})