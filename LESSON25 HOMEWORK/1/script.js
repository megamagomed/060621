let class_1 = document.querySelectorAll('div');
// class_1.addEventListener('click', class_1click);
console.log(class_1)
console.log(class_1.length)
for(let i=0;i<class_1.length; i++) {
    class_1[i].addEventListener('click', class_1click);
    console.log('qweqwe')

}
function class_1click(event) {
    event.target.textContent = "Dont click anymore";
    console.log('sdfsdfsdf')
    event.target.style.backgroundColor = "pink";
}

// let class_2 = document.querySelector('.class_2');
// class_2.addEventListener('click', class_2click);
// function class_2click() {
//     class_2.textContent = "Dont click anymore";
//     class_2.style.backgroundColor = "pink";
// }

// let class_3 = document.querySelector('.class_3');
// class_3.addEventListener('click', class_3click);
// function class_3click() {
//     class_3.textContent = "Dont click anymore";
//     class_3.style.backgroundColor = "pink";
// }

// let class_4 = document.querySelector('.class_4');
// class_4.addEventListener('click', class_4click);
// function class_4click() {
//     class_4.textContent = "Dont click anymore";
//     class_4.style.backgroundColor = "pink";
// }
