const tipcaly = () =>{ 
  let amt = document.getElementById('billamt').value;
  let no = document.getElementById('shareNo').value;
  let tip = document.getElementById('select').value;
  if(amt ==0 && no ==0) {
    alert("please enter bill amt and no of share");
  }
  else {
    var tamout = (amt * tip)/(100 * no);
    var billamt = (amt/no) + tamout;
    document.getElementById("sample").innerHTML = "tips amount of each person =  <br> Rs. " + tamout + "<br> total bill of each person (actual bill + tips)<br>=  " + billamt;
    
  
  }

}
