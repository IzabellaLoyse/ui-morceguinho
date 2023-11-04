import "./form.css";

function Form({ isStatusForm }: { isStatusForm: boolean }) {
  return (
    <form className={isStatusForm ? "answer-form" : "battweet-form"}>
      <label htmlFor="battweet" className="battweet-form__label">
        <img
          src="https://avatars.githubusercontent.com/u/68293229?v=4"
          alt="Imagem de Perfil de Izabella Loyse"
        />
        <textarea
          id="battweet"
          placeholder={isStatusForm ? "Tweet your answer" : "What's happening?"}
          className={
            isStatusForm ? "answer-form__textarea" : "battweet-form__textarea"
          }
        ></textarea>
      </label>
      <button type="submit" className="battweet-form__btn">
        {isStatusForm ? "Answer" : "BatTweet"}
      </button>
    </form>
  );
}

export default Form;
