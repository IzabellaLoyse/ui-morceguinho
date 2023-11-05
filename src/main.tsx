import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AnswersProvider } from "./context/AnswersContext.tsx";
import { BatTweetProvider } from "./context/BatTweetContext.tsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BatTweetProvider>
      <AnswersProvider>
        <App />
      </AnswersProvider>
    </BatTweetProvider>
  </React.StrictMode>
);
