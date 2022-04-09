import { useState } from "react";
import { useTransition, animated } from "react-spring";
import useInterval from "../../hooks/useInterval";
import "./DiceSum.css";

// https://newfivefour.com/react-spring-transitions.html

const getDieRoll = () => {
  return Math.ceil(Math.random() * 6);
};

const getDiceSum = (numberOfDice) => {
  let sum = 0;
  for (let i = 0; i < numberOfDice; i++) {
    sum = sum + getDieRoll();
  }
  return sum;
};

export default function DiceSum() {
  const numberOfDice = 2;
  const [items, setList] = useState([]);
  const [index, setIndex] = useState(0);
  const [target, setTarget] = useState(null);

  const clearList = () => {
    setList([]);
    setIndex(0);
    setTarget(null);
  };

  const addToList = () => {
    setIndex(index + 1);

    var nItems = [...items];
    const nextSum = getDiceSum(numberOfDice);
    const newText = `${nextSum}`;
    const newXRow = nextSum;
    const newX = newXRow * 20;
    const currentInRow = items.filter((item) => item.x === newX).length;
    const newY = (currentInRow + 1) * 20;

    nItems.push({ key: index, item: newText, x: newX, y: newY });

    setList(nItems);
  };

  const addNItems = (n) => {
    setTarget(index + n);
  };

  useInterval(addToList, target > index ? 100 : null);

  const removeFromList = (item) => {
    var nItems = [...items];
    const remainingItems = nItems.filter((obj) => obj.key !== item.key);
    let n = 1;
    const sameXItemsUpdated = remainingItems.map((square) => {
      if (square.x === item.x) {
        const newY = n * 40;
        n++;
        return {
          ...square,
          y: newY,
        };
      } else {
        return square;
      }
    });

    setList(sameXItemsUpdated);
  };

  const transitions = useTransition(items, {
    keys: (item) => item.key,
    from: { x: 0, y: 600 },
    enter: (item) => ({ x: item.x, y: item.y }),
    update: (item) => ({ x: item.x, y: item.y }),
    leave: (item) => ({ x: item.x, y: -40 }),
  });

  return (
    <div className="dice-sum-container" style={{ position: "relative" }}>
      <h3>Dice Sum Simulation</h3>
      <button onClick={clearList}>Clear</button>
      <button onClick={addToList}>Add 1</button>
      <button onClick={() => addNItems(5)}>Add 5</button>
      <button onClick={() => addNItems(10)}>Add 10</button>
      <button onClick={() => addNItems(50)}>Add 50</button>
      {transitions(({ x, y }, item) => (
        <animated.div
          key={item}
          style={{ position: "absolute", bottom: y, left: x }}
          className="animated-div-dice-dots"
        >
          <div className="dice-dots" onClick={() => removeFromList(item)}>
            {item.item}
          </div>
        </animated.div>
      ))}
    </div>
  );
}
