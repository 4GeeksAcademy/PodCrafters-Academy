import React, { useEffect, useState } from "react";
import "../../styles/conteoRegresivo.css";

const ConteoRegresivo = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
     
        window.location.href = "/login";
      }
    }, 1000);

    
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="container">
      <h2>Muchas gracias, su pago se ha registrado exitosamente.</h2>
      <p>Redireccionando a la página principal en {countdown} segundos...</p>
    </div>
  );
};

export default ConteoRegresivo;
