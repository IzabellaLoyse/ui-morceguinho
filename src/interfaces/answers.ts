export interface IAnswers {
  id: string;
  content: string;
  batTweetId: string;
}

export interface IAnswerContext {
  answers: IAnswers[];
  setAnswers: React.Dispatch<React.SetStateAction<IAnswers[]>>;
}
