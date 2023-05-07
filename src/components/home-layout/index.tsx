import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  contentIsVisible: boolean;
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

const HomeLayout: React.FC<Props> = ({
  contentIsVisible,
  sidebar,
  content,
}) => {
  return (
    <div className="w-full min-h-screen flex">
      <div
        className={twMerge(
          'transition-all duration-500 ease-in-out overflow-hidden lg:basis-2/6',
          !contentIsVisible
            ? 'basis-full xs:basis-2/3 sm:basis-2/4 md:basis-2/5'
            : 'basis-0',
        )}
      >
        {sidebar}
      </div>
      <div
        className={twMerge(
          'transition-all duration-500 ease-in-out overflow-hidden lg:basis-4/6',
          contentIsVisible
            ? 'basis-full'
            : 'basis-0 xs:basis-1/3 sm:basis-2/4 md:basis-3/5',
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default HomeLayout;
