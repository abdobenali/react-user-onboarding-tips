import React from "react";

const Register = () => {
  return (
    <div class="flex flex-col border border-red-500">
      <div class="flex flex-col items-center border border-red-500">
        <h2>Entreprise Logo</h2>
        <h4>Entreprise Decription</h4>
      </div>
      <div class="flex flex-col items-center">
        <form class="flex flex-col items-center border border-red-500">
          <input
            type="text"
            name="firstname"
            id="firstname"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Last Name"
          />
          <input
            type="text"
            name="emailaddress"
            id="emailaddress"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Email Address"
          />
          <input
            type="text"
            name="password"
            id="password"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Password"
          />
          <input
            type="text"
            name="confirmpassword"
            id="confirmpassword"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Confirm Password"
          />
          <input
            type="text"
            name="selectcountry"
            id="selectcountry"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Select Country"
          />
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Phone Number"
          />
          <section class="flex items-stretch">
            <button
              type="button"
              class="rounded-full bg-gray-500 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Cancel
            </button>
            <button
              type="button"
              class="rounded-full bg-green-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default Register;
