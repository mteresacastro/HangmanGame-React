// Sabe la palabra, pero no pinta los guiones al iniciar. Falta pasar la info de word, pero ahora mismo no se como. Intente por parametros, pero me falta algo para que entienda que hacer. Tambien ha desaparecido el apartado de letras erroneas al traerme a este componente este trocito de codigo. 

import '../styles/components/Letters.scss';

const SolutionLetters = ({classCss, title, render}) => {
<div className={classCss}>
    <h2 className="title">{title}</h2>
    <ul className="letters">{render}</ul>
</div>
};
export default SolutionLetters;