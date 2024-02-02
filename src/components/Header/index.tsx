import {
  Button,
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { ILanguage } from "../../data/language";

interface IHeader {
  message: ILanguage;
  openConversation: boolean;
  setOpenConversation: (open: boolean) => void;
}

const Header = ({ message, openConversation, setOpenConversation }: IHeader) => {
  return (
    <ConversationHeader>
      <ConversationHeader.Content userName={message.agentName} info={message.agentInfo} />
      <ConversationHeader.Actions>
        <Button onClick={() => setOpenConversation(!openConversation)}>-</Button>
      </ConversationHeader.Actions>
    </ConversationHeader>)
};

export default Header;
