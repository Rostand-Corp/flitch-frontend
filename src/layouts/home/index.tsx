import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import Search from '@components/search';
import UserListItem from '@components/user-list-item';
import MenuSvg from '@public/icons/menu.svg';

import { chats } from './utils';

const Home: React.FC = () => {
  const [contentIsVisible, setContentIsVisible] = useState(false);

  const memoizedChatList = useMemo(
    () =>
      chats.map((item) => (
        <UserListItem
          key={item.id}
          item={item}
          setContentIsVisible={setContentIsVisible}
        />
      )),
    [],
  );

  return (
    <main className="w-full min-h-screen flex">
      <div
        className={twMerge(
          'transition-all duration-500 ease-in-out overflow-hidden lg:basis-2/6',
          !contentIsVisible
            ? 'basis-full xs:basis-2/3 sm:basis-2/4 md:basis-2/5'
            : 'basis-0',
        )}
      >
        <div className="flex flex-col max-h-screen">
          <div className="flex items-center px-[10px] py-[10px] shadow-[0_2px_2px_rgba(114,114,114,0.25)]">
            <MenuSvg className="w-10 h-10 mr-[25px] stroke-primary-black/50 flex-auto" />
            <Search />
          </div>

          <ul className="flex flex-col pt-[10px] basis-full overflow-auto">
            {memoizedChatList}
          </ul>
        </div>
      </div>
      <div
        className={twMerge(
          'transition-all duration-500 ease-in-out overflow-hidden ' +
            'lg:basis-4/6 bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC]',
          contentIsVisible
            ? 'basis-full'
            : 'basis-0 xs:basis-1/3 sm:basis-2/4 md:basis-3/5',
        )}
      >
        <div>Hello World!</div>
      </div>
    </main>
  );
};

export default Home;
