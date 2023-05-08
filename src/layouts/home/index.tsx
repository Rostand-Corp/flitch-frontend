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
    <main
      className={twMerge(
        'w-full min-h-screen grid transition-all duration-500' +
          'lg:grid-cols-[30%_70%] xl:grid-cols-[25%_75%]',
        contentIsVisible
          ? 'grid-cols-[0%_100%] xs:grid-cols-[0%_100%] sm:grid-cols-[0%_100%] md:grid-cols-[0%_100%]'
          : 'grid-cols-[100%_0%] xs:grid-cols-[70%_30%] sm:grid-cols-[50%_50%] md:grid-cols-[40%_60%]',
      )}
    >
      <aside className="overflow-hidden">
        <div className="flex flex-col max-h-screen">
          <div className="flex items-center px-[10px] py-[10px] shadow-[0_2px_2px_rgba(114,114,114,0.25)]">
            <MenuSvg className="w-10 h-10 mr-[25px] stroke-primary-black/50" />
            <Search />
          </div>

          <ul className="flex flex-col pt-[10px] basis-full overflow-x-hidden overflow-y-auto">
            {memoizedChatList}
          </ul>
        </div>
      </aside>
      <div className="h-screen overflow-hidden bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC]">
        <div>Hello World!</div>
      </div>
    </main>
  );
};

export default Home;
