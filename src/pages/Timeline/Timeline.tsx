import { useNavigate } from "react-router-dom";
import BatTweet from "../../components/BatTweet/BatTweet";
import Form from "../../components/Form/Form";
import Separator from "../../components/Separator/Separator";
import Header from "../../container/Layout/Header/Header";
import { batTweets } from "../../db/batTweets";

function TimeLine() {
  const navigate = useNavigate();

  return (
    <section className="timeline">
      <Header title="Home" />
      <Form isStatusForm={false} />
      <Separator />

      {batTweets.map((batTweet) => (
        <BatTweet
          key={batTweet.id}
          content={batTweet.content}
          onClickEvent={() => navigate(`/status/${batTweet.id}`)}
        />
      ))}
    </section>
  );
}

export default TimeLine;
