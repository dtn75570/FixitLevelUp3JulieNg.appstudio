carLoan.onshow = function(){
  NSB.MsgBox("Please enter the requested information:");
  }
  
  var carPrincipleValue = ""
  var carMonthlyInterestValue = ""
  var carTotalMonthsValue =""
  
  
btnCarCalculation.onclick=function(){
  carPrincipleValue = inptCarPrinciple.value
  carMonthlyInterestValue = inptMonthlyInterest.value
  carTotalMonthsValue = inptTotalMonths.value
  var totalCarPayment = (carPrincipleValue * ((carMonthlyInterestValue/100) *((1 + (carMonthlyInterestValue/100)))**carTotalMonthsValue))/(((1 + (carMonthlyInterestValue/100))**carTotalMonthsValue)-1)
  lblHomeMessage.value = " A car loan for $ "+inptCarPrinciple.value +" over "+inptTotalMonths.value +" months at "+inptMonthlyInterest.value +"% interest would have a monthly payment of $ ${totalCarPayment}."
}


btnGobackHomePage.onclick=function(){
   ChangeForm(homePage)
  
}
