try{jQuery("#amount0").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount0").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount1").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount1").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount2").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount2").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount3").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount3").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount4").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount4").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount5").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount5").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount6").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount6").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{jQuery("#amount9999").click(function(){jQuery(".radio-label-btn").removeClass("selected");jQuery("#amount9999").addClass("selected");});}catch(e){console.error('Error in script declaration; Error:'+e.message);};
try{var donationType=2;var minimumAmount=10;var maximumAmount=0;function checkDonation(form){var amount=0;switch(donationType){case 0:if(!parseFloat(form.amount.value)){alert("Please enter a valid donation amount");form.amount.focus();return;}
if(parseFloat(form.amount.value)<minimumAmount){alert("Minimum donation amount allowed is : ₹"+minimumAmount);form.amount.focus();return;}
if((maximumAmount>0)&&(parseFloat(form.amount.value)>maximumAmount)){alert("Maximum donation amount allowed is : ₹"+maximumAmount);form.amount.focus();return;}
break;case 1:var checked=false;if(form.rd_amount.length){for(var i=0;i<form.rd_amount.length;i++){if(form.rd_amount[i].checked){checked=true;amount=form.rd_amount[i].value;break;}}
if(!checked){alert("Please choose a donation amount");return;}}else{if(!form.rd_amount.checked){alert("Please choose a donation amount");return;}else{amount=form.rd_amount.value;}}
if(parseFloat(amount)<minimumAmount){alert("Minimum donation amount allowed is : ₹"+minimumAmount);return;}
if((maximumAmount>0)&&(parseFloat(amount)>maximumAmount)){alert("Maximum donation amount allowed is : ₹"+maximumAmount);form.amount.focus();return;}
break;case 2:var valid=false;if(form.rd_amount.length){for(var i=0;i<form.rd_amount.length;i++){if(form.rd_amount[i].checked){valid=true;amount=form.rd_amount[i].value;break;}}}else{if(form.rd_amount.checked){valid=true;amount=form.rd_amount[i].value;}}
if(!valid){if(!parseFloat(form.amount.value)){alert("Please enter a valid donation amount");return;}else{amount=form.amount.value;}}
if(parseFloat(amount)<minimumAmount){alert("Minimum donation amount allowed is : ₹"+minimumAmount);form.amount.focus();return;}
if((maximumAmount>0)&&(parseFloat(amount)>maximumAmount)){alert("Maximum donation amount allowed is : ₹"+maximumAmount);form.amount.focus();return;}
break;}
if(form.payment_method.value=='')
{alert("Please choose a payment method");form.payment_method.focus();return;}
form.submit();}}catch(e){console.error('Error in script declaration; Error:'+e.message);};
;