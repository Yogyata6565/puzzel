function checkPassword() {
    const password = document.getElementById('Password1').value;
    if (password === "open123") {
        alert("Correct Password! Now solve Puzzle 1.");
        // document.getElementById('Password2').style.display = "block";
       window.location.href = "page2.html"; 
    } else {
        alert("Wrong Password! Try again.");
    }
}

function SubMitFun() {
    const answer = document.getElementById('Password2').value;
    if (answer === "22") {
        alert("Correct! 🎉 Now go to final puzzel");
        window.location.href = "page3.html"; 
    } else {
        alert("Wrong answer. Try again.");
    }
}
t
function SubMitWord() {
    const answer = document.getElementById('Password3').value;
    if (answer === "COMPUTER") {
        alert("Correct! 🎉 You've complated all puzzeles!");
        window.location.href = "congrates.html"; 
    } else {
        alert("Wrong answer. Try again.");
    }
}

function goBack() {
      window.location.href = "con.html"; 
    }