import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import Check from '@public/icons/check.svg';
import { RequiredKeys } from '@typings/index';

type InputProps = RequiredKeys<
  Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    'type'
  >,
  'id'
>;

const Checkbox: React.FC<InputProps> = ({ className, ...props }) => (
  <label
    className={twMerge(
      'w-7 h-7 flex justify-center items-center rounded-lg border-2 border-solid ' +
        'border-black border-gray-600 cursor-pointer overflow-hidden',
      className,
    )}
  >
    <input {...props} type="checkbox" className="peer hidden" />
    <Check className="h-7 w-7 invisible peer-checked:visible" />
  </label>
);

export default memo(Checkbox);
