import Image, { type StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  imageSrc: string | StaticImageData;
}

const AuthLayout: React.FC<Props> = ({ imageSrc, children }) => {
  return (
    <main className="w-full flex">
      <div className="w-1/3 hidden h-screen lg:block">
        <Image
          src={imageSrc}
          alt="background-image"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full max-w-[600px] xxl:max-w-[760px] h-screen mx-auto px-5 flex flex-col flex-grow">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
