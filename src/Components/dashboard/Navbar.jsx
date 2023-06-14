import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
function Navbar() {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="flex h-screen  flex-col justify-between  dark:bg-[#090D16]  sticky top-0 shadow-lg">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <span className="grid h-10 w-10 place-content-center rounded-full  text-xs text-gray-600">
              <img src={auth.currentUser.photoURL} className="rounded-full" />
            </span>
          </div>

          <div>
            <nav aria-label="Main Nav" className="flex flex-col p-2"></nav>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0   p-2">
          <div className="py-4">
            <a className=" group relative flex justify-center rounded  px-2 py-1.5 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Settings
              </span>
            </a>
          </div>
          <form action="/logout">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500  hover:text-gray-700 hover:stroke-black "
              onClick={logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="violet"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
