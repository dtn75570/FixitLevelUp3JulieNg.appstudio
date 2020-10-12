/*Design uses at least one label control, one input control, and one button control. 
Uses at least one event handler in the code. 
Controls named according to standards. 
Code is indented properly. 
Has a function named carLoanPayment that has 3 parameters and returns the monthly payment to the main program. 
Has a function named homeLoanPayment that has 3 parameters and returns the monthly payment to the main program.  Assume that the term can only be 15 or 30 years.
Functions carLoanPayment and homeLoanPayment are invoked from the main program.
Use this formula for the mortgage calculation (a good explanation is at https://www.wikihow.com/Calculate-an-Installment-Loan-Payment (Links to an external site.)): 
monthly payment = P * (r*((1+r)**n))/(((1+r)**n)-1)
where
    P = principle (no commas)
    r = monthly interest, which is (yearly interest/12)/100 so 6% would be .006.
    n = number of total months
Remember, ** means exponentiation (eg. x**2 is x squared)

Asks the user which calculator they want to use, gets the three required data items for that function .
All output uses this format: 
     A home loan for $200,000 over 30 years at 5.7% interest would have a monthly payment of $1160.80.
OR
     A car loan for $30,000 over 60 months at 3.2% interest would have a monthly payment of $542.00
The program must keep running until the user says they want to stop running it.
Hint: would a loop would be handy here? Or something else since you are now using controls? Think about how the user runs your program again when you are using controls ....*/
function carLoanPayment(P,r,n){
  let monthlyPay = P * (r*((1+r)**n))/(((1+r)**n)-1)
  return monthlyPay
}

function carLoanPayment(P,r,n){
  let monthlyPay = P * (r*((1+r)**n))/(((1+r)**n)-1)
  return monthlyPay
}

let principle = ""
let monthlyInterest = ""
let totalMonths = ""
let monthlyPayment = ""

let userChoice =""
let message = ""

btnCalculate.onclick= function(){
principle = inptPrinciple.value
monthlyInterest = inptInterest.value
totalMonths = inptMonth.value
userChoice = inptChoice.value
  while (userChoice != "Stop"){
    if (userChoice == "car loan"){
      monthlyPayment = carLoanPayment(principle,monthlyInterest,totalMonths)
      message = `A home loan for ${principle} over ${totalMonths} years at ${monthlyInterest} interest would have a monthly payment of ${monthlyPayment}.`
    }
    lblMessage.value= message
  }
}


