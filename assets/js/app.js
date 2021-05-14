
console.log(questions)

var curQuestion=0;
var time=questions.length * 20 
var quiztime
var Score= document.getElementById("Score")
Score.innerHTML = time

function startquiz(){
quiztime=setInterval(countdown,1000)
createquestion()
} 
function countdown(){
    if (time<=0){ 
        endtimer()
        failed()
    }else{
        time=time-1 
    Score.innerHTML = time
    }
}

function endtimer(){
    clearInterval(quiztime)
}

function createquestion() {
    var currentquestions=questions[curQuestion]
    var interface=document.getElementById("interface")
interface.innerHTML = `<div>
<div>
    <h2>
        ${currentquestions.question}
    </h2>
</div>
<div>
    <button class="btn btn-success sel-btn" onclick="selectthis('${currentquestions.choices[0]}')" >
    (A) ${currentquestions.choices[0]}
    </button>

    <button class="btn btn-success sel-btn" onclick="selectthis('${currentquestions.choices[1]}')" >
    (B) ${currentquestions.choices[1]}
     </button>

     <button class="btn btn-success sel-btn" onclick="selectthis('${currentquestions.choices[2]}')" >
    (C) ${currentquestions.choices[2]}
    </button>

    <button class="btn btn-success sel-btn" onclick="selectthis('${currentquestions.choices[3]}')" >
    (D) ${currentquestions.choices[3]}
    </button>
</div>
</div>`

}


function hidefeedback(){
    var feedback= document.getElementById("feedback")
    feedback.innerHTML = ""
}

 function selectthis(Userchoice){
    var correctanswer=questions[curQuestion].answer 
    var feedback= document.getElementById("feedback")

    if(Userchoice==correctanswer){
        feedback.innerHTML = "<h3> Correct </h3>"
    }else{
        feedback.innerHTML = "<h3> Incorrect </h3>"
        time=time-5
    }
   setTimeout(hidefeedback,1000);
   if(curQuestion==questions.length-1){
       endquiz()
   }
   else{
    curQuestion++
    createquestion() 
   }

}


function endquiz(){
    clearInterval(quiztime)
    var finalScore=time
    var interface=document.getElementById("interface")
    interface.innerHTML = `<div>
    <div>
        <h2>
            You did Good! 
        </h2>
    </div>
    <div>
    <h3> You Scored ${time} Points</h3>
<p> Enter Your Initials:<input type="text" id="initial" max="4"/> </p> 
        <button class="btn btn-success sel-btn" onclick=" " >
        Add High Score
        </button>
    </div>
    </div>`
} 

function failed(){

    var interface=document.getElementById("interface")
    interface.innerHTML = `<div>
    <div>
        <h2>
            You Did Bad! 
        </h2>
    </div>
    <div>
    <h3> You Ran Out OF Time </h3>

    </div>
    </div>`
}