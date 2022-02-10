const deposite = document.getElementById('deposite-button').addEventListener('click' , function(){
   const depositeInput = document.getElementById('deposite-input')
   const newDepositeText = depositeInput.value ;
   const newDepositeAmount = parseFloat(newDepositeText)

   const depositeTotal = document.getElementById('deposit-total');
   const previousDepositeText = depositeTotal.innerText; 
   const previousDepositeAmount = parseFloat(previousDepositeText)


   const newDepositeTotal = previousDepositeAmount + newDepositeAmount ; 
   depositeTotal.innerText = newDepositeTotal ;
   //update account balance
   const balanceTotal = document.getElementById('balance-total')

   const balaceTotalText = balanceTotal.innerText ;
   const previousbalaceTotal = parseFloat(balaceTotalText);
   const newBalanceTotal = previousbalaceTotal + newDepositeAmount ;
   balanceTotal.innerText = newBalanceTotal


   //clear the input
   depositeInput.value = '' ;
})

//handle withdraw

 document.getElementById('withdraw-btn').addEventListener('click' , function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value ;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount );

    //setwithdraw total 
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText ;
    const previousWithdrawTotal = parseFloat(previousWithdrawText)

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;
    withdrawTotal.innerText =  newWithdrawTotal

    //update balance
      const balanceTotal = document.getElementById('balance-total')
      const previousbalaceText = balanceTotal.innerText
      const previousbalaceTotal = parseFloat(previousbalaceText)
      const newBalanceTotal = previousbalaceTotal - newWithdrawAmount ;
      balanceTotal.innerText = newBalanceTotal ;
    //clear withdraw input
    withdrawInput.value = '' ;
})