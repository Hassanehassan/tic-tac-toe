"use client";
import Cell from "./components/cell";
import { useEffect, useState } from "react";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [messageWin, setMessageWin] = useState("");

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setMessageWin("circle win!");
      } else if (crossWins) {
        setMessageWin("cross win!");
      }
    });
  }, [cells, messageWin]);

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !messageWin) {
      setMessageWin("Draw!");
    }
  }, [cells, messageWin]);

  return (
    <main>
      <div className="container">
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              id={index}
              go={go}
              setGo={setGo}
              key={index}
              cells={cells}
              setCells={setCells}
              cell={cell}
              messageWin={messageWin}
            />
          ))}
        </div>
        {messageWin.length !== 0 ? (
          <div>{messageWin}</div>
        ) : (
          <div>{`it's now ${go} turn!`}</div>
        )}
      </div>
    </main>
  );
}
