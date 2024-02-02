import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import { MessageModel } from "@chatscope/chat-ui-kit-react/src/types";
import { ILanguage } from "../../data/language";

interface IConversation {
  message: ILanguage;
}

const Conversation = ({ message }: IConversation) => {
  const [inputMessage, setInputMessage] = useState("");
  const [messageList, setListMessage] = useState([] as MessageModel[]);

  const [currentChat, setCurrentChat] = useState("");

  const initChat = () => {
    setCurrentChat(Math.random().toString(36).substring(7));
  }

  const handleSendMessage = () => {
    if (!currentChat) initChat();

    const nextList = [...messageList, { direction: "outgoing", position: "single", payload: inputMessage }] as MessageModel[];

    setListMessage(nextList);

    setInputMessage("");

    setTimeout(() => {
      setListMessage([...nextList, { direction: "incoming", position: "single", payload: "pong" }]);
    }, 1000);
  }

  return (
    <MainContainer>
      <ChatContainer style={{ height: "300px" }}>

        <MessageList>
          {
            currentChat && <MessageSeparator content={`ChatID ${currentChat}`} as="div" />
          }

          {
            messageList.map((msg, index) => {
              return <Message
                key={index}
                model={{
                  direction: msg.direction,
                  position: msg.position,
                  payload: msg.payload,
                }}
              />
            })
          }
        </MessageList>
        <MessageInput
          placeholder={message.inputPlaceholder}
          onChange={(e) => { setInputMessage(e) }}
          onSend={() => { handleSendMessage() }}
          attachButton={false}
        />
      </ChatContainer>
    </MainContainer>)
};

export default Conversation;
