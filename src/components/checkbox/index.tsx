import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

import Check from '@public/images/check.svg';
import { RequiredKeys } from '@typings/index';

type InputProps = RequiredKeys<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'id'
>;

const Checkbox: React.FC<InputProps> = ({ className, ...props }) => (
  <label
    className={twMerge(
      'w-7 w-7 flex justify-center items-center rounded-lg border-2 border-solid ' +
        'border-black border-gray-600 cursor-pointer overflow-hidden',
      className,
    )}
  >
    <input type="checkbox" {...props} className="peer hidden" />
    <Check className="w-7 w-7 invisible peer-checked:visible" />
  </label>
);

export default memo(Checkbox);
