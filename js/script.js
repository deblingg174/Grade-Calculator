document.getElementById("calculateBtn").addEventListener("click", function () {
    const score = parseInt(document.getElementById("score").value);
    const resultElement = document.getElementById("result");

    if (isNaN(score) || score < 0 || score > 100) {
        resultElement.textContent = "Please enter a valid score between 0 and 100.";
        resultElement.style.color = "red";
        resultElement.classList.remove("visible");
        setTimeout(() => resultElement.classList.add("visible"), 10); 
        return;
    }

    let grade;
    if (score >= 90) {
        grade = "A";
        resultElement.style.color = "#28a745"; 
    } else if (score >= 80) {
        grade = "B";
        resultElement.style.color = "#17a2b8"; 
    } else if (score >= 70) {
        grade = "C";
        resultElement.style.color = "#ffc107"; 
    } else if (score >= 60) {
        grade = "D";
        resultElement.style.color = "#fd7e14"; 
    } else if (score >= 50) {
        grade = "E";
        resultElement.style.color = "blue"; 
    } else {
        grade = "F";
        resultElement.style.color = "#dc3545"; 
    }
	

    resultElement.textContent = `Your grade is: ${grade}`;
    resultElement.classList.remove("visible");
    setTimeout(() => resultElement.classList.add("visible"), 10); 
});
