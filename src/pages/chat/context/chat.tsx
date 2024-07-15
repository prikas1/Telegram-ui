// import React, { useState } from "react";
// import { inbox } from "../data/inbox";
// import { Inbox } from "common/types/common.type";

// type User = {
//   name: string;
//   image: string;
// };

// type ChatContextProp = {
//   user: User;
//   inbox: Inbox[];
//   activeChat?: Inbox;
//   onChangeChat: (chat: Inbox) => void;
// };

// const initialValue: ChatContextProp = {
//   user: { name: "Jazim Abbas", image: "/assets/images/girl.jpeg" },
//   inbox,
//   onChangeChat() {
//     throw new Error();
//   },
// };

// export const ChatContext = React.createContext<ChatContextProp>(initialValue);

// export default function ChatProvider(props: { children: any }) {
//   const { children } = props;

//   const [user] = useState<User>(initialValue.user);
//   const [inbox] = useState<Inbox[]>(initialValue.inbox);
//   const [activeChat, setActiveChat] = useState<Inbox>();

//   const handleChangeChat = (chat: Inbox) => {
//     setActiveChat(chat);
//   };

//   return (
//     <ChatContext.Provider value={{ user, inbox, activeChat, onChangeChat: handleChangeChat }}>
//       {children}
//     </ChatContext.Provider>
//   );
// }

// export const useChatContext = () => React.useContext(ChatContext);


////new tha

// 



//sec new


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Inbox } from "common/types/common.type";

type User = {
  name: string;
  image: string;
};

type ChatContextProp = {
  user: User;
  inbox: Inbox[];
  activeChat?: Inbox;
  onChangeChat: (chat: Inbox) => void;
};

const initialValue: ChatContextProp = {
  user: { name: "Jazim Abbas", image: "/assets/images/girl.jpeg" },
  inbox: [],
  onChangeChat() {
    throw new Error("onChangeChat is not implemented");
  },
};

export const ChatContext = React.createContext<ChatContextProp>(initialValue);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user] = useState<User>(initialValue.user);
  const [inbox, setInbox] = useState<Inbox[]>(initialValue.inbox);
  const [activeChat, setActiveChat] = useState<Inbox>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInbox = async () => {
      try {
        const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
        const data = response.data.data.data; // Adjust according to your API response structure

        const extractedData: Inbox[] = data.map((item: any) => ({
          id: item.id.toString(),
          name: item.creator.name,
          image: item.creator.image ?? "/assets/images/default-profile.png", // Assuming a default profile image
          lastMessage: "", // Placeholder for last message
          notificationsCount: 0, // Placeholder for notifications count
          messageStatus: "", // Placeholder for message status
          timestamp: "", // Placeholder for timestamp
          isPinned: false, // Placeholder for pinned status
          isOnline: item.creator.isOnline ?? false, // Assuming `isOnline` status from creator
        }));

        setInbox(extractedData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchInbox();
  }, []);

  const handleChangeChat = (chat: Inbox) => {
    setActiveChat(chat);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ChatContext.Provider value={{ user, inbox, activeChat, onChangeChat: handleChangeChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => React.useContext(ChatContext);
