import { twMerge } from 'tailwind-merge';

import { Props } from './utils';

const userId = 'user001'; //temporary variable

const ChatMessage: React.FC<Props> = ({ message }) => {
  return (
    <div
      className={twMerge(
        'mb-2.5',
        message.sender?.id === userId && 'text-right',
      )}
    >
      <div
        className={twMerge(
          'inline-block max-w-[80%] p-2.5 bg-primary-white border-none rounded-md text-right',
          message.sender?.id === userId && 'bg-primary-blue text-primary-white',
        )}
      >
        <p className="inline-block mr-2.5 text-left">{message.content}</p>
        <span
          className={twMerge(
            'inline-block font-thin text-xs',
            message.sender?.id === userId
              ? 'text-primary-white/50'
              : 'text-primary-black/50',
          )}
        >
          10:15
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
