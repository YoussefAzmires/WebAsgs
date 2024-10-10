document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("submit", (event) => {
        const playerName = document.getElementById("name").value.trim();
        const playerAge = document.getElementById("age").value.trim();

        if (playerName === "" || playerAge === "") 
        {
            event.preventDefault();
            alert("one or many of your fields are empty!");
        } 
        else if (playerName.length > 100) 
        {
            event.preventDefault();
            alert("name is too long!");
        }

        sessionStorage.setItem("playerName", playerName);
        sessionStorage.setItem("playerAge", playerAge);
        
    })
})