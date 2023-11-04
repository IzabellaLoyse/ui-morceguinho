import { useParams } from "react-router-dom";
import BatTweet from "../../components/BatTweet/BatTweet";
import Form from "../../components/Form/Form";
import Separator from "../../components/Separator/Separator";
import Header from "../../container/Layout/Header/Header";
import { answers, batTweets } from "../../db/batTweets";
import "./status.css";

function Status() {
  const { id } = useParams();
  const batTweet = batTweets.find((tweet) => tweet.id === id);

  return (
    <section className="status">
      <Header title="BatTweet" />

      {batTweet && <BatTweet key={batTweet.id} content={batTweet.content} />}

      <Separator />

      <Form isStatusForm={true} />

      {answers.map((answer) => (
        <BatTweet key={answer.id} content={answer.content} />
      ))}
    </section>
  );
}

export default Status;
