var trueA=0,
    falseA=0,
    trueAnswers=[2,3,3,2,1,2,1,3,3,3],
    userGuess=[],
    timer=31,
    i=0,
    soru = {
            question: [
            ["1. Peter Parker works as a photographer for:","A) The Daily Planet","B) The Daily Bugle","C) The New York Times","https://media2.giphy.com/media/3ohze42ixLPV6NKC3e/200.gif?cid=e1bb72ff5cb23980782f6c4932450dea","https://media2.giphy.com/media/l0HUfAlpWBCSpr4Fa/200.gif?cid=e1bb72ff5cb23980782f6c4932450dea"],
            ["2. Thor has two war goats to pull his chariot. They are named:","A) Ask and Embla","B) Thunder and Lightning","C) Toothgrinder and Toothgnasher","https://media3.giphy.com/media/4bZkKe9lqbtvy/200.gif?cid=e1bb72ff5cb20de9313258766f8b603e" ,"https://media1.giphy.com/media/mjo0YVD9zgqfC/200.gif?cid=e1bb72ff5cb20de9313258766f8b603e"],
            ["3. Captain America was frozen in which war?","A) Cold War","B) American Civil War","C) World War II","https://media3.giphy.com/media/XV74ZvGRXcZdS/200.gif?cid=e1bb72ff5cb23ad07432675a326cee0a","https://media2.giphy.com/media/ucDynIqrf7ADC/200.gif?cid=e1bb72ff5cb23ad07432675a326cee0a"],
            ["4. What is commonly believed to be The Black Widow's previous occupation before becoming a Russian spy?","A) Painter","B) Ballerina","C) Jet Pilot","https://media0.giphy.com/media/C1O49USbBwn0Q/200.gif?cid=e1bb72ff5cb23d0a4a713963417e916c","https://media1.giphy.com/media/O8dH4G9j0s7Zu/200.gif?cid=e1bb72ff5cb23d0a4a713963417e916c"],
            ["5. Deadpool Joined The Weapon X Program Because:","A) He Had Incurable Cancer","B) It Sounded Like Fun","C) Weasel Dared Him","https://media1.giphy.com/media/kwCLw42hH2cxvIywIi/200.gif?cid=e1bb72ff5cb1e985697161732eb6c059","https://media3.giphy.com/media/57ZvMMkuBIVMlU88Yh/200.gif?cid=e1bb72ff5cb1e985697161732eb6c059"],
            ["6. What Vehicle Is The Avengers Primary Mode Of Transport?","A) The Fantasticar","B) The Quinjet","C) The Blue Bird","https://media0.giphy.com/media/EE2ZisnP6Aq40/200.gif?cid=e1bb72ff5cb237bc676b4155734853ac","https://media2.giphy.com/media/2BYvAMWOX8ZGM/200.gif?cid=e1bb72ff5cb237bc676b4155734853ac"],
            ["7. The Vision Is An Android Created By","A) Ultron","B) Dr.Hank Pym","C) MODOK","https://media0.giphy.com/media/F1pYkxTPkP1D2/200.gif?cid=e1bb72ff5cb23b5a6a4c33696f298488","https://media3.giphy.com/media/uzRld9XdlmSJ2/200.gif?cid=e1bb72ff5cb23b5a6a4c33696f298488"],
            ["8. Nick Fury Has A Brother Who Became The Villain:","A) Taurus","B) Leo","C) Scorpio","https://media1.giphy.com/media/uSyPZO1H0wIuI/200.gif?cid=e1bb72ff5cb23e546e576a48363f74bb","https://media3.giphy.com/media/PnwcgZJZ8jdbq/200.gif?cid=e1bb72ff5cb2376c3454796855e9f3fc"],
            ["9. Bucky Was:","A) Tony Stark's Best Friend","B) A Lab Assistant To Reed Richards","C) Captain America's Sidekick","https://media3.giphy.com/media/xsykCb4prDyDK/200.gif?cid=e1bb72ff5cb23d806242742e495b673d","https://media0.giphy.com/media/7SOAPJYTVLh4c/200.gif?cid=e1bb72ff5cb23d806242742e495b673d"],
            ["10. Weasel Has Worked Closely With:","A) Loki","B) Ultron","C) Deadpool","https://media1.giphy.com/media/nFE2Jxg5YtmNi/200.gif?cid=e1bb72ff5cb23dda7944695459acbdea","https://media0.giphy.com/media/t0E0WLh73a94A/200.gif?cid=e1bb72ff5cb23dda7944695459acbdea"]]};

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
            $("#question").append('<img src="https://media1.giphy.com/media/1YuCdSnC2eVca9aQ3P/200.gif?cid=e1bb72ff5cb243e34151576d32d2310c">');
            timer=31;
            userGuess[i]=0;
            boo=true;

        }
        if(userGuess.length===10){
            clearInterval(counter);
            $("#question").html("<h1>True: " + trueA + " / False: " + falseA + " / Unanswered : " + (10-trueA-falseA) + "</h1>");
            $("#question").append('<img src="https://media0.giphy.com/media/N97kHQgG33rUI/200.gif?cid=e1bb72ff5cb243e34151576d32d2310c">');
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
                $("#question").append('<img src="' + soru.question[i][4]  +'">');
                trueA++;
                clearInterval(counter);
                timer=31;
                userGuess[i]=1;
                boo=true;
            }else if(trueAnswers[i]!=userAnswer && timer>0){
                $("#question").html("<h1>FAlSE!</h1>");
                $("#question").prepend("<h1>True Answer Was : " + soru.question[i][trueAnswers[i]] + "</h1>");
                $("#question").append('<img src="' + soru.question[i][5]  +'">');
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
            setTimeout(function(){doing(i);}, 4000);
        }
    },1000);

}
$(document).ready(function() {
    $("#start").on("click", function(){start(); doing(0)});
});

