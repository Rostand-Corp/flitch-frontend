import { Dispatch, SetStateAction } from 'react';

import { ChatBriefViewResponse } from '@api/index';
import { getDateDistance } from '@components/user-list-item/utils';
import ChatAvatarSvg from '@public/icons/chat-avatar.svg';
import GroupAvatarSvg from '@public/icons/group-avatar.svg';

const userId = 'user001'; //temporary variable
const unreadableMessages = 32; //temporary variable

interface Props {
  item: ChatBriefViewResponse;
  setContentIsVisible: Dispatch<SetStateAction<boolean>>;
}

const UserListItem: React.FC<Props> = ({ item, setContentIsVisible }) => {
  const { chatName, participants, lastMessage } = item;
  const avatarStyles = 'mr-[10px] w-10 h-10 min-w-[40px] min-h-[40px]';

  const title = chatName
    ? chatName
    : participants
        ?.flatMap((item) => (item.id === userId ? [] : item.username))
        .join(', ');

  const time = lastMessage?.timestamp
    ? getDateDistance(lastMessage?.timestamp)
    : 'Recently';

  return (
    <li
      className="px-[10px] py-[5px] mb-[5px] mx-[10px] rounded-xl flex items-center
      cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-black/5"
      onClick={() => setContentIsVisible((prev: boolean) => !prev)}
    >
      {chatName ? (
        <GroupAvatarSvg className={avatarStyles} />
      ) : (
        <ChatAvatarSvg className={avatarStyles} />
      )}
      <div className="flex-1 mr-[10px]">
        <b className="font-medium line-clamp-1">{title}</b>
        <p className="text-primary-black/60 line-clamp-1">
          {chatName && (
            <span className="text-primary-blue">
              {`${lastMessage?.authorUserName}: `}
            </span>
          )}
          {lastMessage?.content}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <span className="mb-[5px] whitespace-nowrap">{time}</span>
        <span
          className="rounded-2xl bg-primary-blue text-primary-white
         w-7 h-6 flex items-center justify-center"
        >
          {unreadableMessages}
        </span>
      </div>
    </li>
  );
};

export default UserListItem;
