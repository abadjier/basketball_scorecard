let countHome = 0
let countGuest = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrementOneHome() {
    countHome += 1
    homeScoreEl.textContent = countHome
}

function incrementOneGuest() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function incrmentTwoHome() {
    countHome += 2
    homeScoreEl.textContent = countHome
}

function incrmentTwoGuest() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
}

function incrmentThreeHome() {
    countHome += 3
    homeScoreEl.textContent = countHome
}

function incrmentThreeGuest() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
}

function reset() {
    countHome = 0
    countGuest = 0
    homeScoreEl.textContent = countHome
    guestScoreEl.textContent = countGuest
}