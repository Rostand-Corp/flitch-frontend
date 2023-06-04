import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonAppearance = {
  default: 'bg-transparent border-0',
  primary: 'rounded bg-primary-blue border-0',
};

type ButtonAppearance = keyof typeof buttonAppearance;

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance?: ButtonAppearance;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  appearance = 'default',
  children,
  className,
  ...props
}) => {
  return (
    <button
      type="button"
      className={twMerge(
        'px-8 py-3 text-primary-white duration-150 hover:bg-primary-blue/80',
        buttonAppearance[appearance],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
