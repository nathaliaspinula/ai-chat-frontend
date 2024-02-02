import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  MessageSeparator,
  Loader,
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { MessageModel } from "@chatscope/chat-ui-kit-react/src/types";
import { ILanguage } from "../../data/language";
import { IChatAgent } from "../../constants/interfaces/IChatAgent";
import ChatLoader from "../../components/ChatLoader";

interface IConversation {
  message: ILanguage;
  chatAgent: IChatAgent;
  setChatAgent: (chatAgent: IChatAgent) => void;
}

const Conversation = ({ message, chatAgent, setChatAgent }: IConversation) => {
  const [inputMessage, setInputMessage] = useState("");

  const [messageList, setListMessage] = useState([] as MessageModel[]);

  const initChatAgent = () => {
    setChatAgent({
      agent: {
        key: "agent",
        name: "Agent",
      },
      chatUid: Math.random().toString(36).substring(7),
    });

    setTimeout(() => {
      setListMessage([{ direction: "incoming", position: "single", payload: "Welcome!" }]);
    }, 1000);
  }

  const handleReceiveMessage = (actualList: MessageModel[]) => {
    const nextList = [...actualList, { direction: "incoming", position: "single", payload: "Sorry. I can't answer your message right now." }] as MessageModel[];

    setListMessage(nextList);
  }

  const handleSendMessage = () => {
    const nextList = [...messageList, { direction: "outgoing", position: "single", payload: inputMessage }] as MessageModel[];

    setListMessage(nextList);

    setInputMessage("");

    handleReceiveMessage(nextList);
  }

  const checkChatAgentIsReady = () => {
    return !chatAgent.agent && !chatAgent.chatUid;
  }

  useEffect(() => {
    setTimeout(() => {
      if (checkChatAgentIsReady()) {
        initChatAgent();
      }
    }, 2000);
  }, []);

  return (
    <MainContainer>
      {
        checkChatAgentIsReady() ? <ChatLoader /> :
          <ChatContainer style={{ height: "300px" }}>
            <MessageList>
              {
                chatAgent.chatUid && <MessageSeparator content={`Chat ${chatAgent.chatUid}`} as="div" />
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
      }

    </MainContainer>)
};

export default Conversation;
