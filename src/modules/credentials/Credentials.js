import React from 'react'

function Credentials() {
  return (
    <div>
      <div class="popup">
  <div class="close-btn">&times;</div>
  <div class="form">
    <h2>Log in</h2>
    <div class="form-element">
      <label>Name</label>
      <input type="text"id="email"placeholder="Enter Name"></input>
    </div>
    <div class="form-element">
      <label for="password">Phone No.</label>
      <input type="tel"id="tel" pattern='[0-9]{10}'></input>
    </div>I
  
    <div class="form-element">
    <button>Sign in</button>
</div>
<div class="form-element">
<a href="#"> Forgot password?</a>
</div>
</div>
    </div>
    </div>
 )
}

export default Credentials