import React from "react";

const Popover = ({ step, handleStepClick, message, handleClosePopover }) => {
  return (
    <div class=" absolute w-96  bg-gray-200 px-4 py-4 rounded-md z-10  ">
      <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
        <button
          onClick={() => {
            handleClosePopover();
          }}
          type="button"
          class="rounded-md bg-gray-200 text-gray-400 hover:text-gray-500 "
        >
          <span class="sr-only">Close</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className="pr-5">{message}</p>
      <div class="pt-4 w-full flex justify-between">
        <button
          // disabled={step === 1 ? true : false}
          onClick={(e) => {
            e.preventDefault();
            handleStepClick(step - 1);
            console.log(step);
          }}
          class={
            step === 1
              ? "hidden"
              : "disabled:bg-gray-200 mt-3 inline-flex  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          }
        >
          Previous
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleStepClick(step + 1);
            console.log(step);
          }}
          class="mt-3 inline-flex  justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset  hover:bg-green-500 sm:col-start-1 sm:mt-0"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Popover;
