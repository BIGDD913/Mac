var rounds = parseInt(prompt("How many rounds do you want to play"))
var wintimes = 0
var tied = 0
var losetimes = 0
for (let i = 1; i <= rounds; i++ ){
    var userchoose = prompt("What do you choose, r, p, or s(rock, paper, scissor)")
    var Cchoose = Math.floor(Math.random() * 3)
    if (Cchoose == 0){
        Cchoose = "r"
    }else if (Cchoose == 1) {
        Cchoose = "p"
    }else{
        Cchoose = "s"
    }
    if (userchoose == "r" && Cchoose == "p") {
        alert("You lose! The Computer use " + Cchoose + " which beats " + userchoose)
        losetimes = losetimes + 1
    }else if (userchoose == "p" && Cchoose == "s") {
        alert("You lose! The Computer use " + Cchoose + " which beats " + userchoose)
        losetimes = losetimes + 1
    }else if (userchoose == "s" && Cchoose == "r") {
        alert("You lose! The Computer use " + Cchoose + " which beats " + userchoose)
        losetimes = losetimes + 1
    }else if (userchoose == Cchoose){
        alert("It's a tie!")
        tied = tied + 1
    }else {
        wintimes = wintimes + 1 
        alert("You win! You use " + userchoose + " which beats " + Cchoose)
    }
}
alert ("You won " + wintimes + " time(s), You lost " + losetimes + " time(s), you tied " + tied + " times(s)."  )