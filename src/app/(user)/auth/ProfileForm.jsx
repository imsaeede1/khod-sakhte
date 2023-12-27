import TextField from "@/common/TextField";

const ProfileForm = ({ name, email, setName, setEmail, onSubmit }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">ورود و ثبت نام</h1>
      <p className="text-sm font-normal py-5 border-b border-gray-100">
        برای ورود به حساب کاربری و یا ثبت نام شماره همراه خود را وارد کنید.
      </p>
      <form className="space-y-8 w-full mt-10" onSubmit={onSubmit}>
        <TextField
          label=" نام کاربری"
          name={name}
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label=" کلمه عبور"
          name={email}
          value={email}
          type="password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <button
            type="submit"
            className="p-4 rounded-md mt-5 bg-purple-400 text-white text-sm  w-full"
          >
            {" "}
            ورود و یا ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
