
const Options = () => {
return (<form>
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
  />
</form>)
};

export default Options;