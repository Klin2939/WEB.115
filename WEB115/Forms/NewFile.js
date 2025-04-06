
var interestRate = .0575

document.getElementById("Button1").onclick = function(){
    let loanAmount = (prompt("Enter loan amount (without commas): "));
    let loanTerm = (prompt("Would you lke the loan term to be a 30 or 15 years:"));

    let monthlyPayment = (((interestRate / 12) * loanAmount) / (1 - Math.pow(1 + (interestRate / 12), (loanTerm * -12)))).toFixed(2);
    console.log(monthlyPayment) 

    let totalInterest = ((monthlyPayment * loanTerm * 12 ) - loanAmount).toFixed(2);
    console.log(totalInterest); 

    let totalMortgage = ((monthlyPayment * loanTerm * 12 )).toFixed(2);
    console.log(totalMortgage);

    document.getElementById("Output").innerHTML = `Mortgage term: ${loanTerm}\n`;

    inRatePercent = (interestRate * 100) + "%";
    console.log(inRatePercent);
    document.getElementById("Output").innerHTML += `Mortgage interest rate: ${inRatePercent}\n`;
    document.getElementById("Output").innerHTML += `Total mortgage: ${totalMortgage}\n`;
    document.getElementById("Output").innerHTML += `Total interest: ${totalInterest}\n`;

    let months = loanTerm * 12;
    while (totalMortgage > 0) {
        months = months - 1;
       totalMortgage = totalMortgage - monthlyPayment;
       document.getElementById("Output").innerHTML += `You have ${totalMortgage.toFixed(2)} left on month ${months}`;
       document.getElementById("Output").innerHTML += "\n";
       if (totalMortgage < monthlyPayment) {
            document.getElementById("Output").innerHTML += "This is the Ending Amortization Calculator...";
            break;

        }
    }
}