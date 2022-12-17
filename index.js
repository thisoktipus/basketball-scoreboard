let homeCount = 0;
let guestCount = 0;
let countElHome = document.getElementById('homePoints');
let countElGuest = document.getElementById('guestPoints');

function incrementOneHome() {
    homeCount++;
    countElHome.innerHTML = homeCount;
    console.log(homeCount);
}
function incrementTwoHome() {
    homeCount= homeCount + 2;
    countElHome.innerHTML = homeCount;
    console.log(homeCount);
}
function incrementThreeHome() {
    homeCount= homeCount + 3;
    countElHome.innerHTML = homeCount;
    console.log(homeCount);
}
function incrementOneGuest() {
    guestCount++;
    countElGuest.innerHTML = guestCount;
    console.log(guestCount);
}
function incrementTwoGuest() {
    guestCount= guestCount + 2;
    countElGuest.innerHTML = guestCount;
    console.log(guestCount);
}
function incrementThreeGuest() {
    guestCount= guestCount + 3;
    countElGuest.innerHTML = guestCount;
    console.log(guestCount);
}


