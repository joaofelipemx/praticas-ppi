import { useState } from "react";

function ContadorTurbinado() {
    const [count, setCount] = useState(0);
    const [totalCliques, setTotalCliques] = useState(0);
    let color; 

    if (count > 10) {
        color = "#b18700"
    }
    else {
        color = "#0000"
    }

    function incrementar() {
        setCount(count + 1);
        setTotalCliques(totalCliques + 1)
    }
    function decrementar() {
        setCount(count =>{
            if (count < 1) {
                setCount(count);
            }
            else {
                setCount(count - 1);
            }
        })
        setTotalCliques(totalCliques + 1)
    }
    function zerar() {
        setCount(0);
        setTotalCliques(totalCliques + 1)
    }

    return(
        <div>
            <h2>Contador</h2>
            <p style={{}}>{count}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={zerar}>Zerar</button>
            <button onClick={decrementar}>-</button>

            <p>Total de cliques: {totalCliques}</p>
        </div>
    )
}

export default ContadorTurbinado