import { PaperPlaneRight } from "phosphor-react";
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useContext,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { AnswersContext } from "../../context/AnswersContext";
import { BatTweetContext } from "../../context/BatTweetContext";
import "./form.css";

function Form({ isStatusForm }: { isStatusForm: boolean }) {
  const { id } = useParams();

  const [tweetContent, setTweetContent] = useState("");
  const [answersContent, setAnswersContent] = useState("");

  const { setBatTweets } = useContext(BatTweetContext);
  const { setAnswers } = useContext(AnswersContext);

  const generateId = () => Math.floor(Math.random() * 100).toString();

  const addNewTweet = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTweet = {
      id: generateId(),
      content: tweetContent,
    };

    const newAnswer = {
      id: generateId(),
      content: answersContent,
      batTweetId: id || "",
    };

    if (isStatusForm) {
      setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
      setAnswersContent("");
    } else {
      setBatTweets((prevBatTweets) => [...prevBatTweets, newTweet]);
      setTweetContent("");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    isStatusForm ? setAnswersContent(value) : setTweetContent(value);
  };

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      addNewTweet(event as any);
    }
  };

  return (
    <form
      onSubmit={addNewTweet}
      className={isStatusForm ? "answer-form" : "battweet-form"}
    >
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
          value={isStatusForm ? answersContent : tweetContent}
          onKeyDown={handleHotKeySubmit}
          onChange={handleInputChange}
        ></textarea>
      </label>
      <button type="submit" className="battweet-form__btn">
        <PaperPlaneRight />
        <span> {isStatusForm ? "Answer" : "BatTweet"}</span>
      </button>
    </form>
  );
}

export default Form;
