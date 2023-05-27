import { memo, useState } from 'react';

import MagnifierSvg from '@public/icons/magnifier.svg';

const Search: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <label
      className="flex items-center basis-full bg-primary-black/5 rounded-[22px]
      border-solid border-[1px] border-primary-black/20 px-[10px] py-[5px] xl:py-[10px]"
    >
      <MagnifierSvg className="w-5 h-5 mr-5 stroke-primary-black/20" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="bg-transparent border-none w-full"
      />
    </label>
  );
};

export default memo(Search);
