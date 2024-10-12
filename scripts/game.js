"use strict";

const player = {
    playerName : "player",
    startingCookie : 3,
    items : ["magnifyingGlass", "CouponToMaxi" , "Milkshake", " Ipad"]

}
const Dealer = {
    
    startingCookie : 3,
    items : ["magnifyingGlass", "CouponToMaxi" , "Milkshake", " Ipad"]

}

document.addEventListener("DOMContentLoaded", start);

function start() {
    player.playerName = sessionStorage.getItem("playerName")
    const playerName = document.getElementById("PlayerName");
    playerName.innerText = player.playerName
    displayInfo(Dealer);
}



function displayInfo(player) {
    
}


   