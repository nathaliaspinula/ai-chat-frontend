import {
  Loader,
} from "@chatscope/chat-ui-kit-react";

const ChatLoader = () => {
  return (
    <div style={{ height: "300px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Loader />
    </div>
  )
};

export default ChatLoader;
