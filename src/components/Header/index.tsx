import {
  ConversationHeader,
} from "@chatscope/chat-ui-kit-react";
import { ILanguage } from "../../data/language";

interface IHeader {
  message: ILanguage;
}

const Header = ({ message }: IHeader) => {
  return (
    <ConversationHeader>
      <ConversationHeader.Content userName={message.agentName} info={message.agentInfo} />
    </ConversationHeader>)
};

export default Header;
