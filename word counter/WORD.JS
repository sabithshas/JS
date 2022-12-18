function countwords() {
    
    var text = document.getElementById("ht").value
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }
    numWords += 1;
    console.log( numWords)
    document.getElementById("es").innerHTML = numWords;
    // document.getElementById("es").innerHTML = count.words;
    var h=document.getElementById("ss").innerHTML = text.length;
    console.log(h)

}
