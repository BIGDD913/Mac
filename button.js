const buttons = document.querySelectorAll("button")
const main = document.querySelector("main")
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    const h3 = document.createElement('h3')
    if (i == 0){
        h3.textContent = "I"
        main.appendChild(h3)
    }else if (i == 1){
        h3.textContent = "Love"
        main.appendChild(h3)
    }else {
        const h2 = document.createElement('h2')
        h2.textContent = "I Love You"
        main.appendChild(h2)
    }
    })
}
