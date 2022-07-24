let homeScoreNumber = 0
let awayScoreNumber = 0


let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")

function plusOneHome() {
    homeScoreNumber = homeScoreNumber + 1
    homeScore.textContent = homeScoreNumber
}