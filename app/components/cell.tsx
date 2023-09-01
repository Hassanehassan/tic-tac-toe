import { Dispatch, SetStateAction } from "react";

type cellprops = {
  messageWin: string;
  cell: string;
  setCells: Dispatch<SetStateAction<string[]>>;
  cells: string[];
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
};
const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  messageWin,
}: cellprops) => {
  const handelClick = (e: any) => {
    if (messageWin) {
      return;
    }
    const notTaken = !cells[id];
    if (notTaken) {
      if (go == "circle") {
        handelChangeCell("circle");
        setGo("cross");
      } else if (go == "cross") {
        handelChangeCell("cross");
        setGo("circle");
      }
    }
  };
  const handelChangeCell = (cellChange: string) => {
    const copyCells = [...cells];
    copyCells[id] = cellChange;
    setCells(copyCells);
  };
  return (
    <div className="square" onClick={handelClick}>
      <div className={cell}>{cell ? (cell == "circle" ? "o" : "x") : ""}</div>
    </div>
  );
};
export default Cell;
