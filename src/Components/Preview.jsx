import React, { useState } from "react";
import "./Preview.css";
const PreviewSection = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return (
    <div class="Testomonials">
      <div class="inner"></div>
      <h1>Traveller's Testomonial</h1>
      <div class="border"></div>

      <div class="row">
        <div class="col">
          <div class="Testomonial">
            <img src="./img/img-01.jpg" />
            <div class="name">Full name</div>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="Testomonial">
            <img src="./img/img-02.jpg" />
            <div class="name">Full name</div>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div class="col">
          <div class="Testomonial">
            <img src="./img/img-03.jpg" />
            <div class="name">Full name</div>
            <div class="stars">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
