"use client";
import { useState } from "react";

// Mark the component as a Client Component
export default function Home() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* <h1 className="">Welcome to BackChanger PRoject</h1> */}
      <div class="justify-center bottom-12 inset-x-0 px-2 fixed flex flex-wrap">
        <div class="flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-lg px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("#B22222")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#B22222" }}
          >
            FireBrick
          </button>
          <button
            onClick={() => setColor("#DB7093")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#DB7093" }}
          >
            PaleVioletRed
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("#FF6347")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FF6347" }}
          >
            Tomato
          </button>
          <button
            onClick={() => setColor("#FFFF00")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFFF00" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("#E6E6FA")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#E6E6FA" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
        </div>
      </div>
    </div>
  );
}
