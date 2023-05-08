import { useState } from 'react';

import MagnifierSvg from '@public/icons/magnifier.svg';

const Search = () => {
  const [value, setValue] = useState('');

  return (
    <label
      className="flex items-center basis-full bg-primary-black/5 rounded-[22px]
               border-solid border-[1px] border-primary-black/20 px-[20px] py-[10px] xl:py-[15px] "
    >
      <MagnifierSvg
        className="w-[20px] h-[20px] mr-[20px]
                stroke-primary-black/20"
      />

      <input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        type="text"
        className="bg-transparent border-none w-full"
      />
    </label>
  );
};

export default Search;
