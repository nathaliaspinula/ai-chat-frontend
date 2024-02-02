import "./assets/themes/main.scss";
import language, { ILanguage } from "./data/language";
import Header from "./components/Header";
import Container from "./components/Container";
import Conversation from "./features/conversation";

const App = () => {
  const currentLang = "es";
  const message = language[currentLang] as ILanguage;

  return (
    <Container>
      <Header message={message} />
      <Conversation message={message} />
    </Container>)
};

export default App;
