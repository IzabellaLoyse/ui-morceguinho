import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./batTweet.css";

function BatTweet() {
  return (
    <a href="#" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/68293229?v=4"
        alt="Imagem de Perfil de Izabella Loyse"
      />

      <section className="tweet-content">
        <div className="tweet-content__header">
          <strong>Izabella Loyse</strong>
          <span>@IzabellaLoyse</span>
        </div>

        <p>
          Estamos vivendo um momento interessante no mercado de startups.
          Soluções que resolvem problemas de forma semelhante, mas com
          precificação mais simples, usabilidade e foco em dev first. Tudo
          começa com um projeto open source/free 👀
        </p>

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
