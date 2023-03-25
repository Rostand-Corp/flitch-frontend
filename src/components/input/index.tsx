import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import type { RequiredKeys } from '@typings/index';

interface InputProps
  extends RequiredKeys<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'id'
  > {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div className="w-full flex flex-col">
      <input
        className={twMerge(
          'p-4 py-3 text-xs xs:text-sm md:text-base rounded ' +
            'border-solid border-[1px] border-primary-black/10',
          error && 'mb-2',
        )}
        {...props}
      />
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
};

export default memo(Input);
