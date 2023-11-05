import { useContext } from "react";
import { useParams } from "react-router-dom";
import BatTweet from "../../components/BatTweet/BatTweet";
import Form from "../../components/Form/Form";
import Separator from "../../components/Separator/Separator";
import Header from "../../container/Layout/Header/Header";
import { AnswersContext } from "../../context/AnswersContext";
import { BatTweetContext } from "../../context/BatTweetContext";
import "./status.css";

function Status() {
  const { id } = useParams();
  const { batTweets } = useContext(BatTweetContext);
  const { answers } = useContext(AnswersContext);

  const batTweet = batTweets.find((tweet) => tweet.id === id);
  const filteredAnswers = answers.filter((answer) => answer.batTweetId === id);

  return (
    <section className="status">
      <Header title="BatTweet" />

      {batTweet && <BatTweet key={batTweet.id} content={batTweet.content} />}

      <Separator />

      <Form isStatusForm={true} />

      {filteredAnswers.map((answer) => (
        <BatTweet key={answer.id} content={answer.content} />
      ))}
    </section>
  );
}

export default Status;
