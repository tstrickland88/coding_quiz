
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


    return new Promise(resolve => setTimeout(resolve, ms))
} 

async function selectthis(Userchoice){
    var correctanswer=questions[curQuestion].answer 
    var feedback= document.getElementById("feedback")

    if(Userchoice==correctanswer){
        feedback.innerHTML = "<h3> Correct </h3>"
    }else{
        feedback.innerHTML = "<h3> Incorrect </h3>"
    }
   
    curQuestion++
    createquestion()
}