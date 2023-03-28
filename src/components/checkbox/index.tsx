import { memo } from 'react';

import { RequiredKeys } from '@typings/index';

type InputProps = RequiredKeys<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'id'
>;

const Checkbox: React.FC<InputProps> = ({ ...props }) => (
  <label
    className="w-7 w-7 flex justify-center items-center rounded-lg border-2 
  border-solid border-black border-gray-600 cursor-pointer overflow-hidden"
  >
    <input type="checkbox" {...props} className="peer hidden" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
      className="w-7 w-7 invisible peer-checked:visible"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  </label>
);

export default memo(Checkbox);
