import { formatDistanceToNow } from 'date-fns';
import { useMemo } from 'react';

import { ChatBriefViewResponse } from '@api/lib';
import ChatAvatarSvg from '@public/icons/chat-avatar.svg';
import GroupAvatarSvg from '@public/icons/group-avatar.svg';

import { avatarStyles, getUsersString } from './utils';

const userId = 'user001'; //temporary variable
const unreadableMessages = 32; //temporary variable

interface Props {
  item: ChatBriefViewResponse;

  onClick(): void;
}

const UserListItem: React.FC<Props> = ({ item, onClick }) => {
  const { chatName, participants, lastMessage } = item;
  const title = useMemo(
    () => getUsersString(participants, userId),
    [participants, userId],
  );

  const time = lastMessage?.timestamp
    ? formatDistanceToNow(new Date(lastMessage?.timestamp))
    : 'Recently';

  return (
    <div
      className="px-2.5 py-[5px] mb-[5px] mx-2.5 rounded-xl flex items-center
      cursor-pointer transition-all duration-300 ease-in-out hover:bg-primary-black/5"
      onClick={onClick}
    >
      {chatName ? (
        <GroupAvatarSvg className={avatarStyles} />
      ) : (
        <ChatAvatarSvg className={avatarStyles} />
      )}
      <div className="flex-1 mr-2.5">
        <b className="font-medium line-clamp-1">{chatName || title}</b>
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
    </div>
  );
};

export default UserListItem;
