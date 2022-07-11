function adduser(){
    player_1 = document.getElementById("player1_login").value;
    player_2 = document.getElementById("player2_login").value;

    localStorage.setItem("player1_Name" , player_1);
    localStorage.setItem("player2_Name" , player_2);

    window.location = "2.html" ; 

}