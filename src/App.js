import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const count = 400;
    const section = document.querySelector(".App");
    let i = 0;

    while (i < count) {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      const size = Math.random() * 4;

      const star = document.createElement("i");

      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";

      const blink_duration = Math.random() * 2;

      star.style.animationDelay = 2 + blink_duration + "s";

      section.appendChild(star);
      i++;
    }

    window.addEventListener("resize", function () {
      window.location.reload();
    });
  }, []);

  return (
    <div className="App">
      <div className="circle_wrap"></div>
      <div className="circle_wrap_2"></div>
      <div className="circle"></div>
      <div className="yr_wp">
        <div className="hny">Happy New Year</div>
        <div className="yr">2021</div>
      </div>
      <div className="my_name">-- by Arnav</div>
    </div>
  );
}

export default App;
