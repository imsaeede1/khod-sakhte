"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProfileForm from "../auth/ProfileForm";
import Image from "next/image";

const AuthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const sendProfileHandler = (e) => {
    e.preventDefault();
    toast.success("ورود با موفقیت انجام شد");
    router.push("/profile");
  };

  return (
    <div className="w-full grid lg:grid-cols-2">
      <div className="lg:col-span-1 flex justify-center items-center w-full">
        <div className="bg-group w-full flex justify-center items-center relative">
          <div className="lg:inset-x-1/2 lg:-mt-8 lg:-ml-16 mt-10">
            <ProfileForm
              name={name}
              email={email}
              setName={setName}
              setEmail={setEmail}
              onSubmit={sendProfileHandler}
            />
            <Image
              src="/images/logo-login.png"
              width="221"
              height="76"
              className="mt-16 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9 hidden lg:flex">
        <Image
          src={`/images/login.png`}
          width={400}
          height={400}
          className=" w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default AuthPage;
