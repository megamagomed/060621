let letters = document.querySelectorAll('div')
// console.log(letters)
for (let i = 0; i < letters.length; i++) {
    // console.log(letters[i])
    letters[i] - addEventListener('click', run);
}
function run(event) {

    if (event.target.style.borderBottom) {
        event.target.style.borderBottom = ""
    } else {
        event.target.style.borderBottom = "1px solid red"
    }

}
document.addEventListener('mousemove', run2);
function run2(event) {
    let x = (event.clientX / (window.innerWidth / 255))
    let y = (event.clientY / (window.innerHeight / 255))

    for (let i = 0; i < letters.length; i++) {

        letters[i].style.color = 'rgb(' + x + ',' + y + "," + 20 + ')'
        x += 25
        if (x > 255) {
            x = 0;
        }

    }
}