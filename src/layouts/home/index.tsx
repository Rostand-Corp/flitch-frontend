import React, { useState } from 'react';

import { ChatBriefViewResponse } from '@api/lib';
import Chat from '@components/chat-background';
import HomeLayout from '@components/home-layout';
import Search from '@components/search';
import MenuSvg from '@public/icons/menu.svg';
import UserListItem from 'src/components/user-list-item';

const chats: ChatBriefViewResponse[] = [
  {
    id: 'chat001',
    chatName: undefined,
    type: 'Private',
    participants: [
      {
        id: 'user001',
        chatId: 'chat001',
        username: 'user1',
        fullname: 'John Doe',
        role: 'Participant',
        joined: new Date('2023-05-01T12:00:00Z'),
      },
      {
        id: 'user002',
        chatId: 'chat001',
        username: 'user2',
        fullname: 'Jane Smith',
        role: 'Participant',
        joined: new Date('2023-05-01T12:05:00Z'),
      },
    ],
    lastMessage: {
      id: 'msg001',
      authorUserName: 'user1',
      authorFullName: 'John Doe',
      content: 'Hello Jane, how are you?',
      timestamp: new Date(),
    },
  },
  {
    id: 'chat002',
    chatName: 'Private Chat 2',
    type: 'Private',
    participants: [
      {
        id: 'user001',
        chatId: 'chat002',
        username: 'user1',
        fullname: 'John Doe',
        role: 'Participant',
        joined: new Date('2023-05-02T12:00:00Z'),
      },
      {
        id: 'user003',
        chatId: 'chat002',
        username: 'user3',
        fullname: 'Bob Johnson',
        role: 'Participant',
        joined: new Date('2023-05-02T12:05:00Z'),
      },
    ],
    lastMessage: {
      id: 'msg002',
      authorUserName: 'user3',
      authorFullName: 'Bob Johnson',
      content: "Hey John, what's up?",
      timestamp: new Date('2023-05-02T12:10:00Z'),
    },
  },
];
const Home: React.FC = () => {
  const [contentIsVisible] = useState(false);

  return (
    <HomeLayout
      contentIsVisible={contentIsVisible}
      sidebar={
        <div className="flex flex-col max-h-[100vh]">
          <div className="flex items-center px-[10px] py-[10px] shadow-[0_2px_2px_rgba(114,114,114,0.25)]">
            <MenuSvg className="w-[40px] h-[40px] mr-[25px] stroke-primary-black/50 flex-auto" />
            <Search />
          </div>

          <div className="flex flex-col pt-[10px] basis-[100vh] overflow-auto">
            {chats.map((item) => (
              <UserListItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      }
      content={
        <Chat>
          <div>Hello World!</div>
        </Chat>
      }
    />
  );
};

export default Home;
