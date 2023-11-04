import BatTweet from "../../../components/BatTweet/BatTweet";
import Form from "../../../components/Form/Form";
import Separator from "../../../components/Separator/Separator";
import Header from "../Header/Header";
import "../layout.css";

function ContentMain() {
  return (
    <main className="content">
      <section className="timeline">
        <Header title="Home" />
        <Form />
        <Separator />
        <BatTweet />
      </section>
    </main>
  );
}

export default ContentMain;
