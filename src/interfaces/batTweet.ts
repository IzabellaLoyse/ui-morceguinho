export interface IBatTweetProps {
  id?: string;
  content: string;
  onClickEvent?: () => void;
}
export interface IBatTweetContext {
  batTweets: IBatTweetProps[];
  setBatTweets: React.Dispatch<React.SetStateAction<IBatTweetProps[]>>;
}
