import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <h4>Quick Link</h4>
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About-us</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Contact-us</a>
              </li>
              <li>
                <a>Log In</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Community</h4>
            <ul>
              <li>
                <a>GitHub</a>
              </li>
              <li>
                <a>Issues</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Help</h4>
            <ul>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Trouble Shooting</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Follow us</h4>
            <ul>
              <li>
                <a>
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
