
//////functions, variables, handles...
/*function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(1);
  const handleClick = () => { 
    numberOfErrors >0 && numberOfErrors<= 13 ? setNumberOfErrors(numberOfErrors + 1) : console.log ('Perdiste'); 
    console.log (numberOfErrors);
    return(numberOfErrors);
  }
  const [lastLetter, setLastLetter]= useState ('');
  const [word, setWord]= useState ('katacrocker');
  const [userLetters, setUserLetters]= useState ([]);
  //const [solutionLetters, setSolutionLetters] = useState([]); 


  const renderSolutionLetters =()=>{
    const wordLetters = word.split('');
    return wordLetters.map ((eachLetter,index)=>{
      if (userLetters.includes(eachLetter)){

      return <li className="letter" key={index}>{eachLetter}</li>
      } else {
        return <li className="letter" key={index}></li>; 
      }
    })
  }

  const renderErrorLetters=(event)=>{
    const value = event.target.value;
  }*/

 /* const handleChange =(event)=> {
    let letter = event.target.value;
    if(letter === event.target.value) {
     setLastLetter(event.target.value.replace (/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/ig, '¿?'));
     if (letter !== ""){
     userLetters.push(event.target.value);
     setUserLetters ([...userLetters]);
     setLastLetter (letter);
      }
    }
  }


///html
  return (
    <>
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleChange}
              pattern="[A-Za-z]"
            />
          </form>
        </section>
        <section className= {`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
          <button className= "numberOfErrors" onClick={handleClick}>Incrementar</button>
        </section>
      </main>
    </div>
    </>
  )
}

export default App

/*AL CARGAR LA PAGINA
  solucion = tiene valor (api - palabra aleatoria) pinta los huecos de las letras
  letras solucion = huecos de la palabra aleatoria. no tiene valor
  letras falladas = vacío
  input letras = vacío
  muñeco = vacío (lineas menor opacidad)

  AL REALIZAR UN EVENTO
  solucion = mismo valor
  letras solucion = pinta las letras acertadas (quitar clase hidden)
  letras falladas = añadir letras si no coinciden con el array de la solucion
  input letras = pintar el valor del input en letras solucion, si está en el array de solucion, y si no está las pinta en falladas
  muñeco = se le añade una linea si el input no esta en letras solucion (o si está en letras falladas)*/


  import { useEffect, useState } from "react";
  import Header from "./Header";
  // api
  import getWordFromApi from "../services/api";
  // styles
  import "../styles/components/_instructions.scss";
  import "../styles/components/_dummy.scss";
  import "../styles/components/_footer.scss";
  import "../styles/components/_form.scss";
  import "../styles/components/_letters.scss";

   
  function App() {
    const [word, setWord] = useState("");
    const [userLetters, setUserLetters] = useState([]);
    const [lastLetter, setLastLetter] = useState("");
  
    useEffect(() => {
      getWordFromApi().then((word) => {
        setWord(word);
      });
    }, []);
  
    // events
  
    const handleKeyDown = (ev) => {
      // Sabrías decir para qué es esta línea
      ev.target.setSelectionRange(0, 1);
    };
  
    const handleChange = (ev) => {
      let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
      if (re.test(ev.target.value) || ev.target.value === "") {
        handleLastLetter(ev.target.value);
      }
    };
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
    };
  
    const getNumberOfErrors = () => {
      const errorLetters = userLetters.filter(
        (letter) => word.includes(letter) === false
      );
      return errorLetters.length;
    };
  
    const renderSolutionLetters = () => {
      const wordLetters = word.split("");
      return wordLetters.map((letter, index) => {
        const exists = userLetters.includes(letter.toLocaleLowerCase());
        return (
          <li key={index} className="letter">
            {exists ? letter : ""}
          </li>
        );
      });
    };
  
    const renderErrorLetters = () => {
      const errorLetters = userLetters.filter(
        (letter) =>
          word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
      );
      return errorLetters.map((letter, index) => {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      });
    };
  
    const handleLastLetter = (value) => {
      value = value.toLocaleLowerCase();
      setLastLetter(value);
  
      if (!userLetters.includes(value)) {
        userLetters.push(value);
        setUserLetters([...userLetters]);
      }
    };
  
    return (
      <div className="page">
        <Header title="Juego del ahorcado"/>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">{renderSolutionLetters()}</ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">{renderErrorLetters()}</ul>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoFocus
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={lastLetter}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
              />
            </form>
          </section>
          <section className={`dummy error-${getNumberOfErrors()}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9  line"></span>
            <span className="error-8  line"></span>
            <span className="error-7  line"></span>
            <span className="error-6  head"></span>
            <span className="error-5  line"></span>
            <span className="error-4  line"></span>
            <span className="error-3  line"></span>
            <span className="error-2  line"></span>
            <span className="error-1  line"></span>
          </section>
        </main>
      </div>
    );
  }
  
  export default App;
