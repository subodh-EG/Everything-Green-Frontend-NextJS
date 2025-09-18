import React from 'react'
import logo from "../../assets/images/eg.webp";
import tree from "../../assets/images/trees.webp";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';
const Signup = () => {
  return (
    <section className="container text-dark-500 ">
      <div className="mt-16 flex justify-between">
        <div></div>
        <div>
          <Image src={logo} alt="logo"></Image>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl ">Sign up</h2>

        <div></div>
      </div>

      {/* form*/}

      <div className="mt-4">
        <p className="font-light">
          Join us on the journey towards a sustainable web by
          <br className="max-lg:hidden" />
          Sign up now{" "}
        </p>

        <div className="flex justify-between mt-10">
          <div className="basis-1/3">
            <form
              action="
               "
              className="w-full"
            >
              <div className="flex flex-col">
                <label htmlFor="">Your fullname*</label>
                <input
                  type="text"
                  className="border border-primary-500 outline-none h-16 rounded-md mt-3.5 px-7 py-5"
                  placeholder="Enter Name"
                />
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="">Email address*</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border border-primary-500 outline-none h-16 rounded-md mt-3.5 px-7 py-5"
                />
              </div>

              <div className="flex flex-col mt-6">
                <label htmlFor="">Create password*</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="border border-primary-500 outline-none h-16 rounded-md mt-3.5 px-7 py-5"
                />
              </div>

              <div className="flex justify-between mt-6">
                <div className="flex items-center gap-3">
                  <input type="checkbox" />
                  <p className="font-medium">I agree to terms & conditions</p>
                </div>

                <div className="underline  cursor-pointer text-dark-400">
                  {/* Forget Password? */}
                </div>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="bg-primary-500 py-5 text-white w-[100%] rounded-md mt-10 cursor-pointer"
                >
                  {" "}
                  Register Account
                </button>
              </div>

              <div className="my-8 text-dark-400 flex gap-3 items-center">
                <hr className="text-dark-400 w-full" /> <p>Or</p>{" "}
                <hr className="w-full" />
              </div>

              <div className="flex justify-between py-5 px-10">
                <div>
                  <FcGoogle className="h-6 w-6" />
                </div>

                <p className="font-medium text-lg ">Register With Google</p>
                <div></div>
              </div>

              <div className="w-[100%]  mt-6">
                <p className="text-center">
                  <span className="text-dark-400">Already an account ? </span>
                  <Link href={"/login"} className='font-medium'>Login here</Link>
                </p>
              </div>
            </form>
          </div>
          <div className=" flex relative ">
            <div className="">
              <Image
                className="h-[72vh] w-[110%] object-fill  "
                src={tree}
                alt="everything green"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup