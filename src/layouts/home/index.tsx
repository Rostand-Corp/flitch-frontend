import { useState } from 'react';

import Chat from '@components/chat-background';
import HomeLayout from '@components/home-layout';
import Search from '@components/search';
import MenuSvg from '@public/icons/menu.svg';
import UserListItem from 'src/components/user-list-item';

import { chats } from './utils';

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
