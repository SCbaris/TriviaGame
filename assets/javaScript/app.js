var trueA=0,
    falseA=0,
    trueAnswers=[2,2,2,1,1,2,2,2,3,2],
    userGuess=[],
    timer=31,
    question=[];
    var boo=false;
    var counter;
    var userAnswer;



function getAnswer(){
    userAnswer=document.getElementById("frm").question.value;
    userAnswer=parseInt(userAnswer);
};


function getQuestion(i){
    switch( i ) {

        case 0: 
            question[i] = $('<form id="frm"><p>1. Which is the first paint coat to apply?</p>A. Undercoat <input type="radio" name="question" value="1"><br>B. Primer <input type="radio" name="question" value="2"><br>C. Gloss <input type="radio" name="question" value="3"><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break;

        case 1: 
            question[i] = $('<form id="frm"><p>2. What is the American name for a plain wallpaper used to smooth out walls?</p>A. Lining paper <input type="radio" name="question" value=1><br>B. Blankstock <input type="radio" name="question" value=2><br>C. Backing paper <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
            
        break;

        case 2: 
            question[i] = $('<form id="frm"><p>3.Which two colors mixed together make orange?</p>A. Red and Brown <input type="radio" name="question" value=1><br>B. Yellow and Red <input type="radio" name="question" value=2><br>C. Brown and Yellow <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        
        break;

        case 3:
            question[i] = $('<form id="frm"><p>4. What is the standard length of a roll of British wallpaper?</p>A. 33 feet <input type="radio" name="question" value=1><br>B. 35 feet <input type="radio" name="question" value=2><br>C.28 feet <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break;

        case 4:
            question[i] = $('<form id="frm"><p>5. What is a rad roller used for?</p>A. Painting the wall behind radiators <input type="radio" name="question" value=1><br>B. Painting the backs of radiators <input type="radio" name="question" value=2><br>C. Painting the front of radiators <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break; 

        case 5:
            question[i] = $('<form id="frm"><p>6.Who invented the Shabby Chic style?</p>A. Laura Ashley <input type="radio" name="question" value=1><br>B. Rachel Ashwel <input type="radio" name="question" value=2><br>C. Gail McCauley <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break; 

        case 6:
            question[i] = $('<form id="frm"><p>7. To what do strings, treads and risers belong?</p>A. Scaffolding <input type="radio" name="question" value=1><br>B.Staircase <input type="radio" name="question" value=2><br>C. Baseboards <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break;

        case 7:
            question[i] = $('<form id="frm"><p>8. In interior decorating which color is considered cold?</p>A. Green <input type="radio" name="question" value=1><br>B. Blue <input type="radio" name="question" value=2><br>C. White <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break; 

        case 8:
            question[i] = $('<form id="frm"><p>9. Who hosts the TV program Grand Designs?</p>A. David Oliver <input type="radio" name="question" value=1><br>B. Kelly S. King <input type="radio" name="question" value=2><br>C. Kevin McCloud <input type="radio" name="question" value=3><br><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break; 

        case 9:
            question[i] = $('<form id="frm"><p>10. What does faux mean?</p>A.Real <input type="radio" name="question" value=1><br>B. Imitation <input type="radio" name="question" value=2><br>C. Smooth <input type="radio" name="question" value=3><br><input type="button" onclick="getAnswer()" value="Submit"></form>'); 
            $("#question").html(question[i]);
        break;
      }
}


function start(){
    $(".startButton").hide();
    $(".timeCounter").show();
    $(".questions").show();
}
function doing(i){
    getQuestion(i);
    counter=setInterval(function(){
        timer--;
        $("#counter").html("<p>Time Remaining : " + timer + " second </p>");
        if(timer===0){
            clearInterval(counter);
            $("#question").html("<h1>Time Is Out!</h1>");
            timer=31;
            userGuess[i]=0;
            boo=true;

        }
        if(userGuess.length===10){
            clearInterval(counter);
            $("#question").html("<h1>True: " + trueA + " / False: " + falseA + " / Unanswered : " + (10-trueA-falseA) + "</h1>");
            $("#start").text("Start Over!")
            $(".startButton").show();
            $("#counter").hide();
            trueA=0;
            falseA=0;
            i=0;
            userGuess=[];
        }
        if(userAnswer===1 ||userAnswer===2||userAnswer===3){
            if(trueAnswers[i]===userAnswer && timer>0){
                $("#question").html("<h1>TRUE!</h1>");
                trueA++;
                clearInterval(counter);
                timer=31;
                userGuess[i]=1;
                boo=true;
            }else if(trueAnswers[i]!=userAnswer && timer>0){
                $("#question").html("<h1>FAlSE!</h1>");
                falseA++;
                clearInterval(counter);
                timer=31;
                userGuess[i]=2;
                boo=true;
        }};
        if(boo){
            boo=false;
            userAnswer=4;
            i++;
            setTimeout(function(){doing(i);}, 3000);
        }
    },1000);

}
$(document).ready(function() {
    $("#start").on("click", function(){start(); doing(0)});
});



