// import { Container } from './style';

import { ITweetProps } from "../interfaces/tweet";

function Tweet({ user, content }: ITweetProps) {
  return (
    <div>
      <h1>{user}</h1>
      <p>{content}</p>
    </div>
  );
}

export default Tweet;
