import { useState } from "react";

function ConversorTemperatura() {
    const [celsius, setCelsius] = useState('');

    const fahrenheit = celsius * 9/5 + 32;

    return (
        <div>
            <h2>Conversor de Temperatura</h2>

            <input
            type="number"
            placeholder="Graus Celsius"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
             />

            <p>{celsius}°C = {fahrenheit}°F</p>
        </div>
    )
}

export default ConversorTemperatura