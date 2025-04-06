//
// Korben Link
// 2-25-2025
//

let count = 0;
console.log(count)

document.getElementById("startTimer").onclick = function(){
    let timeVar = window.setInterval(Timer, 800)

    document.getElementById("stopTimer").onclick = function(){
        clearInterval(timeVar);
    }
    document.getElementById("resetTimer").onclick = function(){
        clearInterval(timeVar);
        count = 0
        document.getElementById("output").innerHTML = count;
    }
}

function Timer () {
    count += 1
    document.getElementById("output").innerHTML = count;
    console.log(count)
}
