// import { useNavigate } from "react-router-dom";
// import { BsFillMoonFill, BsMoon } from "react-icons/bs";

// import SidebarAlert from "./alert";
// import InboxContact from "./contacts";
// import OptionsMenu from "../option-menu";
// import SearchField from "../search-field";
// import Icon from "common/components/icons";
// import { useAppTheme } from "common/theme";
// import { Inbox } from "common/types/common.type";
// import { useChatContext } from "pages/chat/context/chat";
// import {
//   Actions,
//   Avatar,
//   ContactContainer,
//   Header,
//   ImageWrapper,
//   SidebarContainer,
//   ThemeIconContainer,
// } from "./styles";

// export default function Sidebar() {
//   const theme = useAppTheme();
//   const navigate = useNavigate();
//   const chatCtx = useChatContext();

//   const handleChangeThemeMode = () => {
//     theme.onChangeThemeMode();
//   };

//   const handleChangeChat = (chat: Inbox) => {
//     chatCtx.onChangeChat(chat);
//     navigate("/" + chat.id);
//   };

//   return (
//     <SidebarContainer>
//       <Header>
//         <ImageWrapper>
//           <Avatar src="/assets/images/profile.png" />
//         </ImageWrapper>
//         <Actions>
//           <ThemeIconContainer onClick={handleChangeThemeMode}>
//             {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
//           </ThemeIconContainer>
//           <button aria-label="Status">
//             <Icon id="status" className="icon" />
//           </button>
//           <button aria-label="New chat">
//             <Icon id="chat" className="icon" />
//           </button>
//           <OptionsMenu
//             iconClassName="icon"
//             className="icon"
//             ariaLabel="Menu"
//             iconId="menu"
//             options={[
//               "New group",
//               "Create a room",
//               "Profile",
//               "Archived",
//               "Starred",
//               "Settings",
//               "Log out",
//             ]}
//           />
//         </Actions>
//       </Header>
//       <SidebarAlert />
//       <SearchField />
//       <ContactContainer>
//         {chatCtx.inbox.map((inbox) => (
//           <InboxContact
//             key={inbox.id}
//             inbox={inbox}
//             isActive={inbox.id === chatCtx.activeChat?.id}
//             onChangeChat={handleChangeChat}
//           />
//         ))}
//       </ContactContainer>
//     </SidebarContainer>
//   );
// }


import { useNavigate } from "react-router-dom";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { useState } from 'react'; // Import useState hook

import SidebarAlert from "./alert";
import InboxContact from "./contacts";
import OptionsMenu from "../option-menu";
import Icon from "common/components/icons";
import { useAppTheme } from "common/theme";
import { Inbox } from "common/types/common.type";
import { useChatContext } from "pages/chat/context/chat";
import { Text } from "./alert/styles";
import { Title } from "pages/splash/styles";
import {
  Action,
  Actions,
  ContactContainer,
  Header,
  SidebarContainer,
  ThemeIconContainer,
} from "./styles";
import Tabs from "./tabs";

export default function Sidebar() {
  const theme = useAppTheme();
  const navigate = useNavigate();
  const chatCtx = useChatContext();
  const [activeTab, setActiveTab] = useState('ALL'); // State for active tab

  const tabCounts = {
    ALL: chatCtx.inbox.length,
    Regulars: chatCtx.inbox.filter(chat => chat.isRegular).length,
    Unread: chatCtx.inbox.filter(chat => !chat.isRead).length,
    Previous: chatCtx.inbox.filter(chat => chat.isPrevious).length,
    abc: 0, // Replace with actual count logic if available
    efch: 0, // Replace with actual count logic if available
    sjvjhwe: 0, // Replace with actual count logic if available
  };

  const handleChangeThemeMode = () => {
    theme.onChangeThemeMode();
  };

  const handleChangeChat = (chat: Inbox) => {
    chatCtx.onChangeChat(chat);
    navigate("/" + chat.id);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Additional logic for tab change if necessary
  };

  return (
    <SidebarContainer>
      <Header>
        <OptionsMenu
          iconClassName="icon"
          className="icon"
          ariaLabel="Menu"
          iconId="menu"
          options={[
            "New group",
            "Create a room",
            "Profile",
            "Archived",
            "Starred",
            "Settings",
            "Log out",
          
          ]}
        />
        <Title>Telegram</Title>
        <Actions>
        
          <Action>
            <Icon id="search" className="icon search-icon" />
          </Action>
        </Actions>
      </Header>
      <Tabs activeTab={activeTab} onChangeTab={handleTabChange} tabCounts={tabCounts} /> {/* Add Tabs component */}
      <SidebarAlert />
      {/* <SearchField /> */}
      <ContactContainer>
        {chatCtx.inbox.map((inbox) => (
          <InboxContact
            key={inbox.id}
            inbox={inbox}
            isActive={inbox.id === chatCtx.activeChat?.id}
            onChangeChat={handleChangeChat}
          />
        ))}
      </ContactContainer>
    </SidebarContainer>
  );
}
