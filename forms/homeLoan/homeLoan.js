homeLoan.onshow = function(){
  NSB.MsgBox("Please enter the requested information:");
  }
  
  var homePrincipleValue = ""
  var homeMonthlyInterestValue = ""
  var homeTotalMonthsValue =""


btnHomeCalculation.onclick=function(){
  homePrincipleValue = inptHomePrinciple.value
  homeMonthlyInterestValue = inptMonthlyInterestHome.value
  homeTotalMonthsValue = inptTotalMonthsHome.value
  var totalHomePayment = (homePrincipleValue * ((homeMonthlyInterestValue/100) *((1 + (homeMonthlyInterestValue/100)))**homeTotalMonthsValue))/(((1 + (homeMonthlyInterestValue/100))**homeTotalMonthsValue)-1)
  lblHomeMessage.value = " A home loan for $ "+inptHomePrinciple.value +" over "+inptTotalMonthsHome.value +" months at "+inptMonthlyInterestHome.value +"% interest would have a monthly payment of $ ${totalHomePayment}."
}
 
btnGobackHomePageHome.onclick=function(){
  ChangeForm(homePage)
}
