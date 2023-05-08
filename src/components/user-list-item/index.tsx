import { formatDistanceStrict } from 'date-fns';

import { ChatBriefViewResponse } from '@api/lib';
import ChatAvatarSvg from '@public/icons/chat-avatar.svg';
import GroupAvatarSvg from '@public/icons/group-avatar.svg';

const userId = 'user001'; //temp value: logged in user id
const unreadableMessages = 32; //temp value: number of unread messages

const UserListItem: React.FC<{ item: ChatBriefViewResponse }> = ({ item }) => {
  const { chatName, participants, lastMessage } = item;
  const title = chatName
    ? chatName
    : participants
        ?.filter((user) => user.id !== userId)
        .map((value) => value.username)
        .toString() || 'New Chat';
  const time = formatDistanceStrict(
    lastMessage?.timestamp || new Date(),
    new Date(),
  );

  return (
    <div className="px-[20px] py-[5px] mb-[5px] flex items-center">
      {chatName ? (
        <GroupAvatarSvg
          className={'mr-[10px] w-[40px] h-[40px] min-w-[40px] min-h-[40px]'}
        />
      ) : (
        <ChatAvatarSvg
          className={'mr-[10px] w-[40px] h-[40px] min-w-[40px] min-h-[40px]'}
        />
      )}
      <div className="flex-1 mr-[10px]">
        <b className="font-medium line-clamp-1">{title}</b>
        <p className="text-primary-black/60 line-clamp-1">
          {chatName ? (
            <span className="text-primary-blue">
              {lastMessage?.authorUserName + ': '}
            </span>
          ) : (
            ''
          )}
          {lastMessage?.content}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <span className="mb-[5px] whitespace-nowrap">
          {time === '0 seconds' ? 'Now' : time}
        </span>
        <span
          className="rounded-2xl bg-primary-blue text-primary-white
         w-[28px] h-[24px] flex items-center justify-center"
        >
          {unreadableMessages}
        </span>
      </div>
    </div>
  );
};

export default UserListItem;
