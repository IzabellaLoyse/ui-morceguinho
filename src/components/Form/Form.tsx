import "./form.css";

function Form() {
  return (
    <form className="battweet-form">
      <label htmlFor="battweet" className="battweet-form__label">
        <img
          src="https://avatars.githubusercontent.com/u/68293229?v=4"
          alt="Imagem de Perfil de Izabella Loyse"
        />
        <textarea id="battweet" placeholder="What's happening?"></textarea>
      </label>
      <button type="submit" className="battweet-form__btn">
        BatTweet
      </button>
    </form>
  );
}

export default Form;
