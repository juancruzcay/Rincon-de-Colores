import React, { useState } from 'react';

export default function Calculator() {
  const [hours, setHours] = useState(0);
  const [rate, setRate] = useState(10); // Por ejemplo, $10 por hora
  const [cost, setCost] = useState(0);

  const handleCalculate = () => {
    setCost(hours * rate);
  };

  return (
    <div>
      <h2>Calculadora de Costo</h2>
      <div>
        <label>Horas de cuidado:</label>
        <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
      </div>
      <div>
        <label>Costo por hora:</label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calcular</button>
      <div>
        <h3>Costo Total: ${cost}</h3>
      </div>
    </div>
  );
}
