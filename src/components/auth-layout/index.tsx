import Image, { type StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  imageSrc: string | StaticImageData;
}

const AuthLayout: React.FC<Props> = ({ imageSrc, children }) => {
  return (
    <main className="flex">
      <div className="relative w-1/3 hidden h-full lg:block">
        <Image
          src={imageSrc}
          alt="background-image"
          className="absolute w-full h-screen object-cover"
        />
      </div>
      <div className="w-full max-w-[600px] xxl:max-w-[760px] h-screen mx-auto px-5 py-2.5 flex flex-col flex-grow">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
