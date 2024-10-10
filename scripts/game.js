"use strict";

const player = {
    playerName : sessionStorage.getItem("playerName"),
    startingCookie : 3,
    items : ["magnifyingGlass", "CouponToMaxi" , "Milkshake", " Ipad"]

}
const Dealer = {
    
    startingCookie : 3,
    items : ["magnifyingGlass", "CouponToMaxi" , "Milkshake", " Ipad"]

}

document.addEventListener("DOMContentLoaded", start);

function start() {
    displayInfo(player);
    displayInfo(Dealer);
}


function displayInfo(player) {
    const playerName = document.getElementById("PlayerName");
    playerName.innerText=player.playerName;
}


   