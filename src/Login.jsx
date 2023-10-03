import React from "react";

const Login = () => {
  return (
    <div
      className='bg-cover bg-center h-screen flex items-center justify-center'
      style={{ backgroundImage: "url('/assets/images/image-2.jpeg')" }}
    >
      <div className='flex w-3/5 bg-white rounded-lg shadow-lg'>
        <div className='flex-1 pr-8 bg-color-main p-8 text-white'>
          <div className='w-full flex justify-end'>
            <img
              src='/assets/images/image-1.jpeg'
              alt='Logo'
              className='w-24 h-24 mb-4'
            />
          </div>
          <h4 className='text-2xl'>Welcome to</h4>
          <h1 className='uppercase font-bold text-4xl'>Bamac</h1>
          <h2 className='font-semibold text-2xl text-light-green'>
            Student Portal
          </h2>
          <p className='my-2 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in
            cursus turpis massa tincidunt dui ut. Enim diam vulputate ut
            pharetra sit amet aliquam.
          </p>
        </div>
        <div className='flex-1 p-8 text-green-400'>
          <h2 className='text-2xl font-semibold mb-4'>Login</h2>
          <div className='mb-4'>
            <label
              htmlFor='role'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Select Role
            </label>
            <select
              id='role'
              name='role'
              className='w-full p-2 border rounded-2xl outline-none focus:outline-none focus:border-green-300 text-green-400'
            >
              <option value='instructor'>Instructor</option>
              <option value='student'>Student</option>
            </select>
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Your Email Address
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full p-2 rounded-2xl border rounded outline-none focus:outline-none focus:border-green-300'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm font-medium mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full p-2 rounded-2xl  border rounded outline-none focus:outline-none focus:border-green-300'
            />
          </div>
          <button className='w-full bg-green-400 text-white py-2 px-4 rounded hover:bg-green-400 transition duration-300'>
            Login
          </button>
          <div className='flex justify-end py-3'>
            <p className='text-gray-700 text-sm'>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;