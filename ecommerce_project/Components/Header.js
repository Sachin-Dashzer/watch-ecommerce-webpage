import React from "react";


const Header = () => {
  return (
    <>
      <header>
        <section id="frontpage">
          <div className="text">
            <h1>Digital Watches</h1>
            <h1>That are best for</h1>
            <h1 style={{ color: "#ff9704" }}>Daily use</h1>
            <p>
              Every man need a good,dolid watch, my favorite <br /> watch is the
              presidental rolex
            </p>
            <button>explore more</button>
          </div>
          <div className="image">
            <img
              src="https://devdiscourse.blob.core.windows.net/devnews/06_07_2021_19_36_39_5606071.png"
              alt=""
            />
          </div>
        </section>

        <section className="services">
          <div className="box">
            <i class="fa-solid fa-truck-fast"></i>
            <h2>Free shipping</h2>
            <p>
              free shipping on all <br /> online order
            </p>
          </div>
          <div className="box">
            <i class="fa-solid fa-headset"></i>
            <h2>24/7 support</h2>
            <p>
              Contact us anytime for <br /> your problem
            </p>
          </div>
          <div className="box">
            <i class="fa-solid fa-id-card"></i>
            <h2>secure payment</h2>
            <p>
              Hey,don't worry.we ensure <br /> secure transection{" "}
            </p>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
