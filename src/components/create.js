import React from 'react'
import "../styles/create.css"
const create = () => {
  return (
      <>
       <div className="containercreate">
  <form className="card" action="" method='post'>
    <div className="singup">Sign Up</div>
    <div className="inputBox1">
      <input type="text" required="required" />
      <span className="user">Name</span>
          </div>
          <div className="inputBox1">
      <input type="text" required="required" />
      <span className="user">Email</span>
    </div>
    <div className="inputBox">
      <input type="text" required="required" />
      <span>Mobile No</span>
    </div>
    <div className="inputBox">
      <input type="password" required="required" />
      <span>Password</span>
    </div>
    <button className="enter">Sign Up</button>
  </form>
</div>

      </>
  )
}

export default create