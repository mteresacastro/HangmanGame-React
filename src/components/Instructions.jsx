import "../styles/components/Instructions.scss"

const Instructions = () => {
  return (

    <section className="instructions">
      <p>
        Existen dos modos de juego, individual, donde la palabra viene de una API, o multijugador, donde un jugador piensa en una palabra, y la escribe en la seccion de más opciones.
        La metodología de juego es la siguiente, en la seccion principal apareceran los huecos de las letras de la palabra elegida o la generada por la API. El contrincante tendrá que ir escribiendo letras sin números ni signos de puntuación, intentando adivinar la palabra de la solución.
      </p>
      <p>
        Si la letra propuesta está en la palabra a adivinar, aparecerá escrita en su hueco coresponciente, si no está, se dibujará una línea en el dibujo del ahorcado, y se añadirá a letras falladas. El jugador tendrá que adivinar la palabra antes de que el muñeco esté totalmente dibujado, de lo contrario, perderá la partida.
      </p>
    </section>
  )
};

export default Instructions;