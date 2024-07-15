import React from 'react';
import styled from 'styled-components';
import { Text } from '../alert/styles';

const TabsContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 0.5rem 0;
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
  white-space: nowrap;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Badge = styled.span`
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const Tabs = ({ activeTab, onChangeTab, tabCounts }) => {
  const tabs = ['ALL', 'Regulars', 'Unread', 'Previous', 'abc', 'efch', 'sjvjhwe'];

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => onChangeTab(tab)}
        >
          <Text>{tab}</Text>
          {tabCounts[tab] > 0 && <Badge>{tabCounts[tab]}</Badge>}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default Tabs;


// import styled from "styled-components";

// const TabsContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   white-space: nowrap;
//   padding: 0.5rem 0;
// `;

// const Tab = styled.div<{ active: boolean }>`
//   display: flex;
//   align-items: center;
//   padding: 1rem;
//   cursor: pointer;
//   font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
//   border-bottom: ${(props) => (props.active ? '2px solid #007bff' : 'none')};
// `;

// const Badge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #007bff;
//   color: white;
//   border-radius: 50%;
//   width: 1.5rem;
//   height: 1.5rem;
//   margin-left: 0.5rem;
//   font-size: 0.75rem;
// `;

// interface TabsProps {
//   activeTab: string;
//   onChangeTab: (tab: string) => void;
//   tabCounts: { [key: string]: number };
// }

// const Tabs = ({ activeTab, onChangeTab, tabCounts }: TabsProps) => {
//   return (
//     <TabsContainer>
//       {['ALL', 'Regulars', 'Unread', 'Previous', 'abc', 'efch', 'sjvjhwe'].map((tab) => (
//         <Tab
//           key={tab}
//           active={activeTab === tab}
//           onClick={() => onChangeTab(tab)}
//         >
//           {tab}
//           <Badge>{tabCounts[tab]}</Badge>
//         </Tab>
//       ))}
//     </TabsContainer>
//   );
// };

// export default Tabs;

