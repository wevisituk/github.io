count = 0;
var words = ["risky", "stressful", "exhausting", "scary", "hard", "expensive", "tough", "worrying", "frustrating"];

setInterval(function() {
    count++;
    document.getElementById("word").innerHTML = words[count % words.length];
}, 1000);