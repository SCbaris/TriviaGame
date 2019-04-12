var trueA=0,
    falseA=0,
    trueAnswers=[2,2,2,1,1,2,2,2,3,2],
    userGuess=[],
    timer=31,
    i=0,
    soru = {
            question: [
            ["1. Which is the first paint coat to apply?","A. Undercoat","B. Primer","C. Gloss",],
            ["2. What is the American name for a plain wallpaper used to smooth out walls?","A. Lining paper","B. Blankstock","C. Backing paper",],
            ["3. Which two colors mixed together make orange?","A. Red and Brown","B. Yellow and Red","C. Brown and Yellow",],
            ["4. What is the standard length of a roll of British wallpaper?","A. 33 feet","B. 35 feet","C. 28 feet",],
            ["5. What is a rad roller used for?","A. Painting the wall behind radiators","B. Painting the backs of radiators","C. Painting the front of radiators",],
            ["6. Who invented the Shabby Chic style?","A. Laura Ashley","B. Rachel Ashwel","C. Gail McCauley",],
            ["7. To what do strings, treads and risers belong?","A. Scaffolding","B.Staircase","C. Baseboards",],
            ["8. In interior decorating which color is considered cold?","A. Green","B. Blue","C. White",],
            ["9. Who hosts the TV program Grand Designs?","A. David Oliver","B. Kelly S. King","C. Kevin McCloud",],
            ["10. What does faux mean?","A. Real","B. Imitation","C. Smooth",]]};

    var boo=false;
    var counter;
    var userAnswer;

function getAnswer(){ // if onclick submit, app get the value of what you choose.
    userAnswer=document.getElementById("frm").question.value;
    userAnswer=parseInt(userAnswer);
};


function getQuestion(i){ //take question values from array, and put the html. It need i. i is question number.
                         //i start 0 and end 9. total 10 question.
    var q='<form id="frm"><p>'+ soru.question[i][0] +'</p>', // question
        a1=soru.question[i][1] + '<input type="radio" name="question" value="1"><br>', // choose A
        a2=soru.question[i][2] + '<input type="radio" name="question" value="2"><br>', // choose B
        a3=soru.question[i][3] + '<input type="radio" name="question" value="3"><br>', // choose C
        su='<br><input type="button" onclick="getAnswer()" value="Submit"></form>', // Submit button
        t=q+a1+a2+a3+su;
        //console.log(t);
        $("#question").html(t);
}


function start(){
    $(".startButton").hide();
    $(".timeCounter").show();
    $("#counter").show();
    $(".questions").show();
}
function doing(i){
    if(userGuess.length!=10) getQuestion(i);
    
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
            console.log("userGuess lenght " + userGuess.length);
            console.log("userGuess " + userGuess);
            console.log("first question" + soru.question[0][0]);
            console.log("trueA  " + trueA);
            console.log("i  " + i);
            
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
                $("#question").prepend("<h1>True Answer Was : " + soru.question[i][trueAnswers[i]] + "</h1>");
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