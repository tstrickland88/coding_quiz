var highscores=JSON.parse(window.localStorage.getItem("highscores")) || []
highscores.sort(function(A,B){
return B.Score -A.Score
})

for(var i=0;i<highscores.length;i++){
    var liTag=document.createElement("li")
    liTag.innerHTML=`${highscores[i].initial}: ${highscores[i].Score}` 
    document.getElementById("scoreslist").appendChild(liTag)
}