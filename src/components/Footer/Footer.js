import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black	w-full py-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <svg
              width="30"
              height="30"
              fill="currentColor"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
              fill="currentColor"
              viewBox="0 0 50 50"
              width="30"
              height="30"
            >
              {" "}
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col w-full text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
          <form className="flex flex-col w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className="">
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="email"
                name="email"
                id=''
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Email"
              />
              <input
                type="text"
                name="message"
                id=''
                className="mt-5 h-48 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Message"
              />
              <button
                className="mt-5 flex-shrink-0 px-4 py-2 text-base font-semibold text-white border-white border-2 rounded-lg shadow-md hover:bg-white hover:text-black duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
        <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Dept of EEE | FISAT
        </div>
      </div>
    </footer>
  );
}
