import Image from "next/image";

const ShowCase = () => {
  return (
    <div className="relative text-center hidden lg:block">
      <Image src={`/images/product-showcase.png`} width="1920" height="357" />
      <h1 className="text-white font-bold text-6xl absolute inset-y-2/4 text-center w-full whitespace-nowrap -mt-5">
        خود ساخته بی درنگ یاد بگیر
      </h1>
    </div>
  );
};

export default ShowCase;
