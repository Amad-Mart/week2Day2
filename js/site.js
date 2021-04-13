function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    let start = userWord.length-1;
    let revString ="";
    for (let i = start; i >= 0; i--){
         revString += userWord[i];      
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = revString;
}