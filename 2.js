player1_name = localStorage.getItem("player1_Name");
player2_name = localStorage.getItem("player2_Name");

p1_score = 0;
p2_score = 0;


document.getElementById("Player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";


document.getElementById("player1_score").innerHTML = p1_score;
document.getElementById("player2_score").innerHTML = p2_score;

document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;

function send(){     
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;    
    actual_answer = parseInt(number_1)*parseInt(number_2);
    question_first = "<h3 id='word_display'>" + number_1 + " X " + number_2 + "</h3>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick = 'check()'>Check</button>"
    row = question_first + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer){
        if(answer_turn == "player_1")
        {
            p1_score = p1_score + 1;
            document.getElementById("player1_score").innerHTML = p1_score;        
        }
        else
        {
            p2_score = p2_score + 1;
            document.getElementById("player2_score").innerHTML = p2_score;
        }
        }

        if(question_turn == "player_1")
        {
            question_turn = "player_2";
            document.getElementById("question").innerHTML = "Question Turn - " + player2_name;
         }
         else
        {
            question_turn = "player_1";
            document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
        }

        if(answer_turn == "player_1")
        {
            answer_turn = "player_2";
            document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;
        }
        else
        {
            answer_turn = "player_1";
            document.getElementById("answer").innerHTML = "Answer Turn - " + player1_name;
        }
    document.getElementById("output").innerHTML = "";
}