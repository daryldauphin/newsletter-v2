import React, { useState } from 'react';
import './App.css';

function App() {

  const [currentFrame, setCurrentFrame] = useState(0)

  return (

    <div className="App">
    {currentFrame === 0 && 
      <main>
        <form>
          <fieldset>
          <div class="form-main">
            <h1>Join The List</h1>
            <h2 class="mobile-sign">SIGN UP FOR <br/> THE IN-Dex NEWSLETTER</h2>
            <h2 class="desktop-sign">SIGN UP FOR THE IN-Dex NEWSLETTER</h2>

            <input id="email"  name="email" placeholder="Enter Email Address" required></input>
            <button onClick={() => setCurrentFrame(currentFrame + 1)}>NEXT</button>
          </div>
          <div class="privacy">
            <input class="check" type="checkbox" name="checkbox"></input>
            <label class="check2"> I agree to receive information from Interactive Nerd in accordance with the following <a href="https://www.w3schools.com">Privacy Policy</a></label>
          </div>
          </fieldset>         
        </form>
      </main>
    }
    {currentFrame === 1 && 


        <main>
        <form>
          <fieldset>
          <div class="form-main">
                <h1>Join The List</h1>
                <h2 class="mobile-name">Almost Done! Please Enter<br />Your First and Last Name.</h2>
                <h2 class="desktop-name">Almost Done! Please Enter Your First and Last Name.</h2>

            <div class="name">
                <input id="name1"  name="email" placeholder="First Name" required></input>
                <input id="name2"  name="email" placeholder="Last Name" required></input>
            </div>
            <button onClick={() => setCurrentFrame(currentFrame + 1)}>SIGN UP</button>
          </div>
          </fieldset>         
        </form>
        </main>


    }
    {currentFrame === 2 && 



          <main>
          <form>
            <fieldset>
            <div class="form-main">
                  <h1>congratulations!</h1>
                  <h2 class="end-mobile">Thank You For <br /> Signing Up!</h2>
                  <h2 class="end-mobile">Look out for the latest news on <br />your favorite shows.</h2>   
                 <div class="desktop-final">
                  <h2 class="end-desktop1">Thank You For Signing Up!</h2>
                  <div class="end-desktop">
                    <h2 class="final">Look out for the latest news on your favorite shows.</h2> 

                  </div>                 
                  </div>
            </div>
            </fieldset>         
          </form>
          </main>


    }
    </div>
  );
}

export default App;
