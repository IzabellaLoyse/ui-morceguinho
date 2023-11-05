import { createContext, useState } from "react";
import { IAnswerContext, IAnswers } from "../interfaces/answers";

export const AnswersContext = createContext<IAnswerContext>({
  answers: [],
  setAnswers: () => {},
});

export const AnswersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [answers, setAnswers] = useState<IAnswers[]>([
    {
      id: "1",
      content: "Me too!",
      batTweetId: "1",
    },
    {
      id: "2",
      content: "I disagree.",
      batTweetId: "1",
    },
  ]);

  return (
    <AnswersContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};
