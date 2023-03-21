let chance = "p1"
const playerCard = document.getElementById("playerCard")
const gameCard = document.getElementById("gameCard")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")

const player1WinCount = document.getElementById("player1WinCount")
const player2WinCount = document.getElementById("player2WinCount")
const drawCount = document.getElementById("drawCount")
const totalCount = document.getElementById("totalCount")

let p1Count = 0, p2Count = 0, dCount = 0, tCount = 0
let player1Name, player2Name
function startGame() {

    player1Name = document.getElementById("p1").value
    player2Name = document.getElementById("p2").value

    // console.log(player1Name, player2Name);
    if (player1Name === "" || player2Name === "") {
        console.log("Name Requried");
        document.getElementById("output").innerHTML = `<div class= "alert alert-danger">Please Enter Your Name </div>`
        setTimeout(() => {
            document.getElementById("output").innerHTML = ""
        }, 2000);
    } else {
        player1.innerHTML = player1Name
        player2.innerHTML = player2Name
        playerCard.classList.add("d-none")
        gameCard.classList.remove("d-none")
    }
}
function game(id) {
    const box = document.getElementById(id)
    const isRed = box.classList.contains("bg-danger")
    const isGreen = box.classList.contains("bg-success")
    if (!isRed && !isGreen) {

        if (chance === "p1") {
            box.classList.add("bg-danger")
            box.innerHTML = `<h1>X</h1>`
            chance = "p2"

        } else {
            box.classList.add("bg-success")
            box.innerHTML = `<h1>0</h1>`
            chance = "p1"
        }

    }
    if (!winner() && checkAllFill()) {
        dCount++
        resetGame()
    }
}
function winner() {
    return (
        checkWinner("b1", "b2", "b3", "bg-danger") ||
        checkWinner("b4", "b5", "b6", "bg-danger") ||
        checkWinner("b7", "b8", "b9", "bg-danger") ||
        checkWinner("b1", "b4", "b7", "bg-danger") ||
        checkWinner("b2", "b5", "b8", "bg-danger") ||
        checkWinner("b3", "b6", "b9", "bg-danger") ||
        checkWinner("b1", "b5", "b9", "bg-danger") ||
        checkWinner("b3", "b5", "b7", "bg-danger") ||

        checkWinner("b1", "b2", "b3", "bg-success") ||
        checkWinner("b4", "b5", "b6", "bg-success") ||
        checkWinner("b7", "b8", "b9", "bg-success") ||
        checkWinner("b1", "b4", "b7", "bg-success") ||
        checkWinner("b2", "b5", "b8", "bg-success") ||
        checkWinner("b3", "b6", "b9", "bg-success") ||
        checkWinner("b1", "b5", "b9", "bg-success") ||
        checkWinner("b3", "b5", "b7", "bg-success")

    )
    // checkWinner("b1", "b2", "b3", "bg-success")
    // const isBox1Red = document.getElementById("b1").classList.contains("bg-danger")
    // const isBox2Red = document.getElementById("b2").classList.contains("bg-danger")
    // const isBox3Red = document.getElementById("b3").classList.contains("bg-danger")

    // if (isBox1Red && isBox2Red && isBox3Red) {
    //     console.log("Red is Winner")
}
//     const isBox1Green = document.getElementById("b1").classList.contains("bg-success")
//     const isBox2Green = document.getElementById("b2").classList.contains("bg-success")
//     const isBox3Green = document.getElementById("b3").classList.contains("bg-success")
//     if (isBox1Green && isBox2Green && isBox3Green)
//     console.log(" green is winner");
// }
function checkWinner(id1, id2, id3, color) {
    const isBox1 = document.getElementById(id1).classList.contains(color)
    const isBox2 = document.getElementById(id2).classList.contains(color)
    const isBox3 = document.getElementById(id3).classList.contains(color)

    if (isBox1 && isBox2 && isBox3) {
        console.log(`${color} is winner`)
        document.getElementById("output").innerHTML = `<div class ="alert alert-success">${color === "bg-danger" ? "player 1" : "player 2"} win </div>`
        setTimeout(function () {
            document.getElementById("output").innerHTML = ""
        }, 3000)
        setTimeout(function () {
            resetGame()
        }, 2000)
        color === "bg-danger"
            ? p1Count++
            : p2Count++
        return true

    }
    return false
}
function resetGame() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`b${i}`).innerHTML = i

        document.getElementById(`b${i}`).classList.remove("bg-success")
        document.getElementById(`b${i}`).classList.remove("bg-danger")
    }
    tCount++
    stat()
}
function stat() {
    totalCount.innerHTML = tCount
    drawCount.innerHTML = dCount
    player1WinCount.innerHTML = p1Count
    player2WinCount.innerHTML = p2Count
}
function checkAllFill() {
    let boxCount = 0
    for (let i = 1; i <= 9; i++) {

        const isRed = document.getElementById(`b${i}`).classList.contains("bg-success")
        const isGreen = document.getElementById(`b${i}`).classList.contains("bg-danger")
        if (isRed || isGreen) {
            boxCount++
        }

    }
    return boxCount === 9 ? true : false;
}