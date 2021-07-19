import logo from './logo.svg';
import './App.css';
function checkInteger(ele)
{
  if(document.getElementById(ele).value!=="")
  {
    if(document.getElementById(ele).value%1===0)
    {
      document.getElementById("error").innerHTML="";
      document.getElementById(ele).style["border"]="0.1px solid gray";
      return true;
    }
    else 
    {
      
      document.getElementById("error").innerHTML="Please Enter a valid number";
      document.getElementById(ele).style["border"]="0.1px solid red";
      
    }
    return false;

  }
  
}
function checkDecimal(ele)
{
  if(document.getElementById(ele).value%1!==0)
  {
    if(document.getElementById(ele).value.split(".")[1].length>2)
    {
      document.getElementById("error").innerHTML="Only 2 places of decimal value allowed";
      document.getElementById(ele).style["border"]="0.1px solid red";  
    }
    else
    {
      document.getElementById("error").innerHTML="";
      document.getElementById(ele).style["border"]="0.1px solid gray";
      return true;
    }
    
  }
  else
  {
    return true;
  }
  return false;
  
}
function validateForm()
{
  checkInteger("amount");
  checkInteger("tenure");
  checkDecimal("interest-rate")
}
function submitForm()
{
  if(document.getElementById("btn").innerHTML==="CALCULATE")
  {
    if(document.getElementById("amount").value!=="" && document.getElementById("tenure").value!=="" && document.getElementById("interest-rate").value!=="")
    {
      if(checkInteger("amount") &&
      checkInteger("tenure") &&
      checkDecimal("interest-rate"))
      {
        document.getElementById("error").innerHTML="";
        calculateEmi();
      }
    }
    else
    {
      document.getElementById("error").innerHTML="All the fields are required";
    }
    
  }
  else
  {
    window.location.reload(); 
  }
  
}
function calculateEmi()
{
  document.getElementById("btn").innerHTML="RESET";
  document.getElementById("amount").disabled = true;
  document.getElementById("tenure").disabled = true;
  document.getElementById("interest-rate").disabled = true;
  
  let p=document.getElementById("amount").value;
  let r=document.getElementById("interest-rate").value/1200;
  let n=document.getElementById("tenure").value;
  let comp=Math.pow((1+r),n);
  let e= p*r*(comp/(comp-1))

  document.getElementById("loan-emi").innerHTML=Math.round(e).toLocaleString('hi');
  document.getElementById("interest-payable").innerHTML=Math.round(e*n-p).toLocaleString('hi');
  document.getElementById("total-payment").innerHTML=Math.round(e*n).toLocaleString('hi');
  document.getElementById("emi-output").style["display"]="block";
  
  //alert(e);
  
}
function App() {
  return (
    <div className="App">
      <div>
        <div className="emi-input">
          <div className="heading">Loan EMI Calculator</div>
          <div className="small-heading" style={{color:"red"}} id="error"></div>
          <div className="form">
            <table>
              <tbody>
              <tr>
                <td>Loan Amount</td>
                <td><input type="number" onInput={validateForm} placeholder="Enter Amount" id="amount"/></td>
                <td>INR</td>
              </tr></tbody>

              <tbody>
              <tr>
                <td>Loan Tenure</td>
                <td><input type="number" onInput={validateForm} placeholder="Enter months" id="tenure"/></td>
                <td>Months</td>
              </tr></tbody>
              <tbody>
              <tr>
                <td>Interest Rate</td>
                <td><input type="number" onInput={validateForm} placeholder="NN.NN" id="interest-rate"/></td>
                <td>%</td>
              </tr></tbody>
            </table>
          </div> 
          <div className="my-button" id="btn" onClick={submitForm}>
              CALCULATE
          </div>
        </div>


        <div className="emi-output" id="emi-output">
          
          <div className="small-heading">Loan EMI Calculator</div>
          
          <div className="first-row">
            <div className="emi">
              <div>
                Loan EMI<br/> ₹ <span id="loan-emi"></span>
              </div>
            </div>

            <div className="interest">
              <div>
                Total Interest Payable<br/> ₹ <span id="interest-payable"></span>
              </div>
            </div>
          </div>

          <div className="second-row">
            <div>
            Total Payment (Principal + Interest)<br/> ₹ <span id="total-payment"></span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
