import React from 'react'

const Header = () => {
  return (
    <header>
<div className="logo-header">
    <div className="logo-image"><img src="logo-white.png" alt="Logo"/></div>
    <div className="logo-text">Eden Playhouse and Learning Center Inc.</div>
</div>
<div className="humburger">
    <div className="line"></div>  
    <div className="line"></div>    
    <div className="line"></div>   
</div>
 
 <nav className="nav-bar">
    <ul>
        <li><a href="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Progams</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Enroll Now</a></li>
    </ul> 
</nav>
</header>
  )
}

export default Header