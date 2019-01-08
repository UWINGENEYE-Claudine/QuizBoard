//Business(or back-end)logic:
var answers =["C", "B", "B","A"],
tot = answers.length;

function getCheckedValue(radioName) {
    // alert(radioName)
    var radios = document.getElementsByName(radioName); //Get radio group by-name
    // console.log(radios)
    for (var y=0; y < radios.length; y++){
        // alert(radios[y].checked)
        if (radios[y].checked) return radios[y].value; // return the checked value
    }
    
}
function getScore() {
    var score = 0;
    for (var i= 0; i < tot ; i++)
    if (getCheckedValue("question" + i) === answers[i]) score +=5 ; // increment only
    return score;
}
function returnScore () {
    alert("Your score is " + getScore() + "/" + tot);
}
//User interface(or front-end)logic:
$(document).ready(function() {
    $("#blanks form") .submit(function(event) {
        var answers =[];
    $("#result").text ("Your score is " + getScore(answers));
    event.preventDefault();
});
$("#submit").click(function() {
    $("#quiz").toggle();
    //$("#result").slideToggle();
    $("#score").show();
});
$("#score").click(function() {
    $("#result").toggle();
    $("#quiz").slideToggle();
    $("#score").toggle();
   });
});
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    