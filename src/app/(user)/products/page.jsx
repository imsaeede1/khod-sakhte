import Link from "next/link";
import Image from "next/image";
import { ServiceData } from "@/constants/index";
import ShowCase from "@/components/Showcase";
import Counseling from "@/components/Counseling";
import Footer from "@/components/Footer";
import { CiHeadphones } from "react-icons/ci";
const Products = async () => {
  return (
    <div>
      <ShowCase />
      <h1 className="lg:text-2xl container xl:max-w-screen-xl text-md w-full font-bold lg:my-5 my-3 px-5">
        دوره های خود ساخته
      </h1>
      <button className="fixed lg:hidden rounded-s-md w-6 h-20 left-0 top-40 bg-purple-400 text-white ">
        <span className="transform text-xs -mr-3 rotate-90 inline-block">
          <div className="flex">
            <CiHeadphones className="w-3 h-3 ml-1" />
            <span> مشاوره</span>
          </div>
        </span>
      </button>
      <div className="grid grid-cols-3 container xl:max-w-screen-xl py-4 px-4 lg:py-1">
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ServiceData.map((product) => {
            return (
              <div
                key={product.id}
                className="col-span-1 rounded-xl border border-gray-50 shadow-md p-3"
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <Image
                    src={`/images/${product.backgroundImage}.png`}
                    width={400}
                    height={400}
                    className="rounded-2xl w-full h-full object-center object-cover"
                  />
                </div>

                <h2 className="font-bold text-lg">{product.title}</h2>
                <p className="text-sm leading-6 my-2 text-gray-900">
                  {product.descrption}
                </p>
                <button className="w-full text-center mb-2 mt-3">
                  <Link
                    className="text-purple-500 text-sm text-center w-full"
                    href={`/products/${product.slug}`}
                  >
                    مشاهده
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Counseling />
      <Footer />
    </div>
  );
};

export default Products;
