import { useMemo } from 'react';

import ChatMessage from '@layouts/home/chat-message';
import {
  avatarStyles,
  getUsersString,
} from '@layouts/home/user-list-item/utils';
import BackArrow from '@public/icons/back-arrow.svg';
import ChatAvatarSvg from '@public/icons/chat-avatar.svg';
import ClipBtn from '@public/icons/clip-btn.svg';
import EmojiBtn from '@public/icons/emoji-btn.svg';
import GroupAvatarSvg from '@public/icons/group-avatar.svg';
import Microphone from '@public/icons/microphone.svg';

import { Props, messages } from './utils';

const userId = 'user001'; //temporary variable

const Chat: React.FC<Props> = ({ item, onClick }) => {
  const { chatName, participants, lastMessage } = item;
  const title = useMemo(
    () => getUsersString(participants, userId),
    [participants, userId],
  );

  return (
    <div className="h-screen min-w-[280px] flex flex-col relative">
      <div className="px-4 py-2.5 flex items-center bg-primary-white">
        <BackArrow className="w-5 h-4 mr-4 lg:hidden" onClick={onClick} />
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
                {lastMessage?.authorUserName}:
              </span>
            )}
            {lastMessage?.content}
          </p>
        </div>
      </div>
      <div className="flex-1 w-full p-2.5 pb-16 overflow-y-auto">
        <div className="mx-auto max-w-3xl">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </div>
      <div className="w-full px-[5px] py-[5px] absolute left-0 bottom-0">
        <div className="w-full max-w-lg mx-auto flex justify-center items-center">
          <div className="h-14 px-5 flex-1 rounded-xl bg-primary-white flex items-center">
            <EmojiBtn className="w-5 h-5 cursor-pointer" />
            <input
              type="text"
              placeholder="Message"
              className="w-full flex-1 mx-5 border-none"
            />
            <ClipBtn className="w-5 h-5 cursor-pointer" />
          </div>
          <button
            className="w-14 h-14 ml-2.5 flex justify-center 
              items-center rounded-full bg-primary-white border-none"
          >
            <Microphone />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
