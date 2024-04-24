import React from "react";
import Link from "next/link";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div class="h-full bg-gray-400 text-[#555555]">
      {/* logo */}
      <div className="flex justify-between  mx-36 mt-16">
        <Image src={"/assets/icons/logo.svg"} width={250} height={100} />
      </div>

      {/* right side */}
      <div className="mx-auto">
        <div className="flex justify-center mx-36 my-16">
          <div className="w-[70%]  flex justify-center ">
            <form action="">
                {/* First Name & Last Name */}
                <div className="flex justify-around">
                    <div>
                        <label htmlFor="fname" className="block">
                            First Name :{" "}
                        </label>
                        <input  className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="Enter your name.." type="text" name="fname" id="fname" />
                    </div>
                    <div className="ml-10">
                        <label htmlFor="lname" className="block">
                            Last Name :
                        </label>
                        <input className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="Enter your name.." type="text" name="lname" id="lname" />
                    </div>
                </div>
                {/* Email & Mobile  */}
                <div className="flex justify-around mt-9">
                    <div>
                        <label htmlFor="email" className="block">
                            Email :
                        </label>
                        <input  className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="info@xyz.com" type="email" name="email" id="email" />
                    </div>
                    <div className="ml-10">
                        <label htmlFor="mobile" className="block">
                            Mobile No. :
                        </label>
                        <input className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="+91 - 98596 58000" type="text" name="mobile" id="mobile" />
                    </div>
                </div>
                {/* Password & Confirm Password */}
                <div className="flex justify-around mt-9">
                    <div>
                        <label htmlFor="password" className="block">
                            Password :
                        </label>
                        <input  className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="xxxxxxxxxx" type="text" name="password" id="password" />
                    </div>
                    <div className="ml-10">
                        <label htmlFor="cpassword" className="block">
                            Confirm Password :
                        </label>
                        <input className="bg-[#EEEEEE] px-5 rounded-md w-96 mt-3 h-10" placeholder="xxxxxxxxxx" type="text" name="cpassword" id="cpassword" />
                    </div>
                </div>

                {/* Sign Up Button */}
                <div className="mt-10 text-white">
                <Link href="/login" >
                    <button className="w-36 h-11 rounded-lg bg-[#306BFF] hover:bg-blue-400">Sign Up</button>
                  </Link>
                </div>
            </form>
          </div>

          {/* left side */}
          <div class="w-[30%] md:block hidden ml-32">
            <Image src={"/assets/icons/sign-up.svg"} width={500} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
