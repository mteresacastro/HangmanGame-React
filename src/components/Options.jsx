
const Options = (props) => {

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleChange = (ev) => {
    props.updateWord(ev.target.value);
  };

  return (<form onSubmit={handleSubmit}>
    <label className="title" htmlFor="word">
      Escribe aquí la palabra que hay que adivinar:
    </label>
    <input
      autoFocus
      autoComplete="off"
      className="form__input"
      maxLength="15"
      type="text"
      id="word"
      name="word"
      onChange={handleChange}
    />
  </form>)
};

export default Options;