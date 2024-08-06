import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
    {
      option: "Daniela",
      style: { backgroundColor: "green", textColor: "black" },
    },
    { option: "Maria", style: { backgroundColor: "white" } },
    { option: "Martha" },
  ],
  data2 = [
    {
      option: "Charly",
      style: { backgroundColor: "green", textColor: "black" },
    },
    { option: "Julian", style: { backgroundColor: "white" } },
    { option: "Pepito" },
  ],
  data3 = [
    {
      option: "Maicol",
      style: { backgroundColor: "green", textColor: "black" },
    },
    { option: "Cristiano ronaldo", style: { backgroundColor: "white" } },
    { option: "Messi" },
  ];

const RouletteComponent = () => {
  const [mustSpin, setMustSpin] = React.useState(false)
  const [prizeNumber, setPrizeNumber] = React.useState(0)
  const [team, setTeam] = useState(data)
  const [selected, setSelected] = useState([])

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * team.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const searchTeam = (value) => {
    if (value === "data") {
      return data;
    }
    if (value === "data2") {
      return data2;
    }
    if (value === "data3") {
      return data3;
    }
  };
  /**
   * todo: almacenar usuario
   */
  useEffect(() => {
    <RouletteComponent />;
  }, [team]);
  return (
    <div style={{boxShadow: '4,6,9,2'}}>
      <div>
        <select
          name="team"
          onChange={(e) => setTeam(searchTeam(e.target.value))}
        >
          <option value="data">Laura</option>
          <option value="data2">Efrain</option>
          <option value="data3">Miguel</option>
        </select>
      </div>

      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={team}
        onStopSpinning={() => setMustSpin(false)}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  );
};

export default RouletteComponent;
