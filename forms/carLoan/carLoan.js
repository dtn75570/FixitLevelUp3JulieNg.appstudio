carLoan.onshow = function(){
  NSB.MsgBox("Please enter the requested information:");
  }
//Define the variables
  var carPrincipleValue = ""
  var carMonthlyInterestValue = ""
  var carTotalMonthsValue =""
  
  
btnCarCalculation.onclick=function(){
  carPrincipleValue = inptCarPrinciple.value
  carMonthlyInterestValue = inptMonthlyInterest.value
  carTotalMonthsValue = inptTotalMonths.value
  var totalCarPayment = Math.round((carPrincipleValue * ((carMonthlyInterestValue/100) *((1 + (carMonthlyInterestValue/100)))**carTotalMonthsValue))/(((1 + (carMonthlyInterestValue/100))**carTotalMonthsValue)-1))
  lblOuputCar = totalCarPayment
  lblCarMessage.value = " A car loan for $ "+inptCarPrinciple.value +" over "+inptTotalMonths.value +" months at "+inptMonthlyInterest.value +"% interest would have a monthly payment of "+lblOuputCar +"."
}

btnGobackHomePage.onclick=function(){
   carLoan.reset()
   ChangeForm(homePage)
   
}
