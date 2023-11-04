import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { IBatTweetProps } from "../../interfaces/batTweet";
import "./batTweet.css";

function BatTweet({ content, onClickEvent }: IBatTweetProps) {
  return (
    <a onClick={onClickEvent} className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/68293229?v=4"
        alt="Imagem de Perfil de Izabella Loyse"
      />

      <section className="tweet-content">
        <div className="tweet-content__header">
          <strong>Izabella Loyse</strong>
          <span>@IzabellaLoyse</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content__footer">
          <button type="button">
            <ChatCircle />
            20
          </button>

          <button type="button">
            <ArrowsClockwise />
            20
          </button>

          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </section>
    </a>
  );
}

export default BatTweet;
