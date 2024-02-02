import "./assets/themes/main.scss";
import { useState } from "react";
import language, { ILanguage } from "./data/language";
import Header from "./components/Header";
import Container from "./components/Container";
import Conversation from "./features/conversation";
import { IChatAgent } from "./constants/interfaces/IChatAgent";

const App = () => {
  const currentLang = "es";
  const message = language[currentLang] as ILanguage;

  const [openConversation, setOpenConversation] = useState(false);
  const [chatAgent, setChatAgent] = useState({} as IChatAgent);

  return (
    <Container>
      <Header message={message} openConversation={openConversation} setOpenConversation={setOpenConversation} />
      {
        openConversation && <Conversation chatAgent={chatAgent} setChatAgent={setChatAgent} message={message} />
      }
    </Container>)
};

export default App;
