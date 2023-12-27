import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-primary-900 custom-footer ">
      <div className="container xl:max-w-screen-xl m-auto px-5 lg:px-0">
        <div className="flex justify-between flex-wrap border-dashed border-b border-gray-600 pt-14 pb-10">
          <div className="lg:w-1/3 w-full flex flex-col justify-center items-center lg:justify-start lg:items-start border-dashed border-b border-gray-600 pb-5 lg:pb-0 lg:border-none">
            <Image
              width="230"
              height="66"
              src={`/images/footer-log.png`}
              className="mb-5"
            />
            <span className="mt-1 lg:mt-5 lg:leading-8 leading-6 text-justify lg:text-right text-xs lg:text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </span>
          </div>
          <div className="lg:w-1/6 w-1/2">
            <h2 class="mb-6 mt-4 lg:mt-0 font-bold lg:text-2xl text-md uppercase text-white">
              صفحات مهم
            </h2>
            <ul class=" text-xs lg:text-sm">
              <li class="mb-4 ">
                <a href="#" class="hover:underline">
                  صفحه اصلی
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  لیست دوره ها
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  درباره ما
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  ارتباط با ما
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 w-1/2 ">
            <h2 class="mb-6 mt-4 lg:mt-0 font-bold lg:text-2xl text-md uppercase">
              لیست دوره ها
            </h2>
            <ul className="text-xs lg:text-sm">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  دوره مدیریت بیزنس
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  دوره جهش ثروت
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  دوره کسب و کار اینستاگرام
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  دوره مدیریت بیزنس ۲
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  دوره مدیریت بیزنس ۳
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 w-full border-dashed border-t pt-5 lg:pt-0 border-gray-600 lg:border-none">
            <h2 class="mb-6 font-bold lg:text-2xl text-md uppercase text-white">
              مجوز ها
            </h2>
            <div className="flex gap-6">
              <Image
                src={`/images/footer-logo (2).png`}
                width="100"
                height="100"
              />
              <Image
                src={`/images/footer-logo (1).png`}
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between flex-col-reverse flex-wrap lg:flex-row py-5">
          <div className="w-full lg:w-fit">
            <p className="mb-2 font-bold lg:text-2xl text-md text-white mt-3 lg:mt-0">
              {" "}
              آدرس
            </p>
            <span className="text-xs lg:text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </span>
          </div>
          <div className="flex gap-6 w-full lg:w-fit justify-between  border-dashed border-b pb-5 lg:pb-0 border-gray-600 lg:border-none text-xs lg:text-sm">
            <div className="flex flex-col justify-center lg:px-6  lg:mx-2 ">
              <span>ارتباط با پشتیبانی</span>
              <span className="mt-1">۰۲۱-۴۵۶۵۶</span>
            </div>
            <div className="flex gap-3 h-12">
              <Image
                src={`/images/linkedin (1).png`}
                width="48"
                height="48"
                className="cursor-pointer"
              />
              <Image
                src={`/images/instagram.png`}
                width="48"
                height="48"
                className="cursor-pointer"
              />
              <Image
                src={`/images/youtube.png`}
                width="48"
                height="48"
                className="cursor-pointer"
              />
              <Image
                src={`/images/twitter.png`}
                width="48"
                height="48"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
