import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <>

    
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          <h3>Sign Up</h3>
          <span>It's quick and easy.</span>
        </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="register-form">
          <form action="">
            <div className="row">
              <div className="col">
                <input type="text" placeholder='Name' name='name' className='form-control my-3' />
              </div>
              <div className="col">
                <input type="text" placeholder='Surename' name='surename' className='form-control my-3' />
              </div> 
            </div>
            <input type="text" placeholder='Mobile Number or Email Address' name='email' className='form-control my-3' />

            <input type="password" placeholder='Password' name='password' className='form-control my-3' />

            <div className="row my-3">
              <div className="col">
                <select className='form-control ' name="" id="">
                  <option selected>Date</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>

              <div className="col">
                <select name="" className='form-control' id="">
                  <option selected>Month</option>
                  <option value="january">january</option>
                  <option value="february">february</option>
                  <option value="march">March</option>
                  <option value="april">april</option>
                  <option value="may">May</option>
                  <option value="june">June</option>
                  <option value="july">July</option>
                  <option value="august">August</option>
                  <option value="september">September</option>
                  <option value="october">October</option>
                  <option value="november">November</option>
                  <option value="december">December</option>
                </select>
              </div>

              <div className="col">
                <select className='form-control ' name="" id="">
                  <option selected>Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                  <option value="2011">2011</option>
                  <option value="2012">2012</option>
                  <option value="2013">2013</option>
                  <option value="2014">2014</option>
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                </select>
              </div>

            </div>

              <label for="male">Male</label> <input type="radio" name='gender' value="male" id='male'/>
               <label for="female">Female</label> <input type="radio" name='gender' value="female" id='female'/>

               <div className="description my-3">
                <span>People who use our service may have uploaded your contact information to Facebook. Learn more.</span><br/>
                <span>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</span>
               </div>

               <input type="submit" className='btn btn-success w-50 d-block my-3 m-auto ' value="Sign Up" />
              
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    
      <div className="login-page">
        <div className="container">
           <div className="row justify-content-center">
               <div className="login-wrap">
                   <div className="col-md-6">
                    <div className="login-logo">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
                        <h1>Facebook helps you connect and share with the people in your life.</h1>
                    </div>
                </div>
                <div className="col-md-5">
                   <div className="login-form">
                     <div className="card">
                        <div className="card-body shadow">
                        <form action="">
                        <input type="text" name='email' placeholder='Email or Phone Number' className='form-control my-2' />

                         <input type="password" name='password' placeholder='Password' className='form-control my-2' />

                         <input type="submit" value="Login" className="btn btn-primary form-control"/>
            
                     </form>
                     <div className="forgot-password">
                      <span><a href="#">Forgotten Password?</a></span>
                     </div>
                     <div className="create-account text-center">
                         <hr />
                         <button className='btn btn-success text-center' data-toggle="modal" data-target="#exampleModalCenter" >Create new Account</button>
                     </div>
                        </div>
                     </div>
                     
                    
                   </div>

                    <div className="create-page text-center">
                        <span><a href="#">Create a Page</a>  for a celebrity, brand or business.</span>
                     </div>
                </div>
               </div>
           </div>
        </div>
      </div>
    
    
    </>
  )
}

export default Login