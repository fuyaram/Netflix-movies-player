import React from 'react'
import './Footer.css'
import logo from './image/netflix-logo-text-emblem-31-removebg-preview.png'
const Footer = () => {
  return (
    <>
    <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
         
          <span class="logo"><img class="logo" src={logo} alt='io'></img></span>
        </div>
        <div class="media-icons">
          <a href="."><i class="fab fa-facebook-f"></i></a>
          <a href="."><i class="fab fa-twitter"></i></a>
          <a href="."><i class="fab fa-instagram"></i></a>
          <a href="."><i class="fab fa-linkedin-in"></i></a>
          <a href="."><i class="fab fa-youtube"></i></a>
        </div>
      </div>
      <div class="link-boxes">
      <ul class="box">
     
    <li class="link_name">Netflix</li>
    <li class="link_name">Exclusive Shows and Movies</li>
    <li class="link_name">Personalized Recommendations</li>
    <li class="link_name">Ad-Free Streaming</li>
    <li class="link_name">Offline Viewing</li>
    <li><a href=".">Enjoy Unlimited Entertainment and Streaming</a></li>


</ul>
        <ul class="box">
          <li class="link_name">pages</li>
          <li><a href=".">contacts us</a></li>
          <li><a href=".">about us</a></li>
          <li><a href=".">terms and conditions</a></li>
          <li><a href=".">privacy & pplicy</a></li>
          <li><a href=".">FAQ</a></li>
          <li><a href=".">licence</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Account</li>
          <li><a href=".">login</a></li>
          <li><a href=".">register</a></li>
          <li><a href=".">pro account</a></li>
          <li><a href=".">kid account</a></li>
          <li><a href=".">parents control</a></li>
          
        </ul>
        <ul class="box">
        <li class="link_name">NETFLIX</li>
<li><a href=".">Netflix Entertainment</a></li>
<li><a href=".">Discover</a></li>
<li><a href=".">Watch Now</a></li>
<li><a href=".">Originals</a></li>
<li><a href=".">Movies</a></li>
<li><a href=".">TV Shows</a></li>

          
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email"></input></li>
          <li><input type="button" value="Subscribe"></input></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2023 <a href=".">LAYERS.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href=".">Privacy policy</a>
          <a href=".">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer