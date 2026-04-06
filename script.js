// Question 1 Function
function reverseMyString() {
    let original = document.getElementById("userInputString").value;
    let reversed = "";

    if (original === " ") {
        alert("Please enter a string");
    } else{
        for(let i=original.length - 1; i>=0; i--) {
            reversed += original[i];
        }
        document.getElementById("reverseDisplay").innerText = reversed;
        
    }

}


// Question 2 Function
function checkPalindrome() {
    let entry = document.getElementById("palindromeInput").value;
    if (entry === " ") {
        document.getElementById("palindromeDisplay").innerText = "Enter a Number.";
    } else{
        let backToFront = "";
        for (let i = entry.length - 1; i >= 0; i--){
            backToFront += entry[i]
        }
    // Using If-else statement
    if (entry === backToFront){
        document.getElementById("palindromeDisplay").innerText = "Yes, it is a Palindrome.";      
    } else {
        document.getElementById("palindromeDisplay").innerText = "No, it is not a Palindrome.";

    }   
    }
}

// Question 3 Function
function calculateTotalBill(){
    let subtotal = parseFloat(document.getElementById("billAmount").value);
    let tipPercent = parseFloat(document.getElementById("tipRate").value);

    // Using If-else statement
    if (isNaN(subtotal) || isNaN(tipPercent)){
        alert("Please enter a numeric value.");
    } else{
        let tipAmount = subtotal * (tipPercent / 100);
      let finalTotal = subtotal + tipAmount;
    document.getElementById("billDisplay").innerText = "$" + finalTotal.toFixed(2);

    let display = document.getElementById("billDisplay");
    if(display) {
        display.innerText = "$" + finalTotal.toFixed(2);
    }else{
            alert("Total to pay: $" + finalTotal.toFixed(2));
        }
    }
}

