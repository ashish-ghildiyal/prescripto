import React from 'react'

const Login = () => {
  return (
    <form className="min-h-[80vh] flex items-center">
  <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
    <p className="text-2xl font-semibold">Login</p>
    <p>Please log in to book appointment</p>
    <div className="w-full ">
      <p>Email</p>
      <input
        className="border border-[#DADADA] rounded w-full p-2 mt-1"
        type="email"
        required=""
        defaultValue=""
      />
    </div>
    <div className="w-full ">
      <p>Password</p>
      <input
        className="border border-[#DADADA] rounded w-full p-2 mt-1"
        type="password"
        required=""
        defaultValue=""
      />
    </div>
    <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
      Login
    </button>
    <p>
      Create an new account?{" "}
      <span className="text-primary underline cursor-pointer">Click here</span>
    </p>
  </div>
</form>

  )
}

export default Login