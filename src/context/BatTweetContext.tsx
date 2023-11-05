import { createContext, useState } from "react";
import { IBatTweetContext, IBatTweetProps } from "../interfaces/batTweet";

export const BatTweetContext = createContext<IBatTweetContext>({
  batTweets: [],
  setBatTweets: () => {},
});

export const BatTweetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [batTweets, setBatTweets] = useState<IBatTweetProps[]>([
    {
      id: "1",
      content: "I love Batman!",
    },
    {
      id: "2",
      content: "Batman is my favorite superhero.",
    },
  ]);

  return (
    <BatTweetContext.Provider value={{ batTweets, setBatTweets }}>
      {children}
    </BatTweetContext.Provider>
  );
};
