import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="emi-input">
          <div className="heading">Loan EMI Calculator</div>
          <div className="form">
            <table>
              <tr>
                <td>Loan Amount</td>
                <td><input/></td>
                <td>INR</td>
              </tr>

              <tr>
                <td>Loan Tenure</td>
                <td><input/></td>
                <td>Months</td>
              </tr>

              <tr>
                <td>Interest Rate</td>
                <td><input/></td>
                <td>%</td>
              </tr>
            </table>
          </div> 
          <div className="my-button">
              CALCULATE
          </div>
        </div>


        <div className="emi-output">
          
          <div className="small-heading">Loan EMI Calculator</div>
          
          <div className="first-row">
            <div className="emi">
              <div>
                Loan EMI<br/> ₹ 52,668
              </div>
            </div>

            <div className="interest">
              <div>
                Total Interest Payable<br/> ₹ 52,668
              </div>
            </div>
          </div>

          <div className="second-row">
            <div>
            Total Payment (Principal + Interest)<br/> ₹ 52,668
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
