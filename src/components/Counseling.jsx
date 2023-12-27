import TextField from "@/common/TextField";

const Counseling = () => {
  return (
    <div className=" m-auto flex justify-center w-full py-14 mt-10 bg-slate-50 px-5">
      <div className="flex justify-center items-center flex-col w-fit">
        <h1 className="font-bold text-2xl mb-7">دریافت مشاوره</h1>
        <span className="text-sm text-gray-800 mb-6">
          برای دریافت مشاوره شماره همراه خود را وارد کنید تا کارشناسان ما با شما
          تماس بگیرند
        </span>
        <form className="flex" dir="ltr">
          <input
            type="text"
            autoComplete="off"
            className="w-full p-3 rounded-md border border-gray-300 bg-gray-200 outline-none"
            placeholder="+98"
          />
          <button className="text-sm text-white  ml-4 rounded-md py-4 w-56  bg-purple-400">
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Counseling;
