import { useRouter } from "next/router";
import Link from "next/link";
// import ActivitySelectedContext from "../context/ActivitySelectedContext";
// import { useContext } from "react";

const BookBar = () => {
  const router = useRouter();
  // const { setActivitySelected } = useContext(ActivitySelectedContext);

  if (router.query.slug) {
    return (
      <Link href="/contact">
        <a
          className="flex px-3 md:px-5 py-1 md:py-2 items-center text-white bg-zuta border border-zuta rounded-full hover:bg-transparent text-sm md:text-lg hover:text-zuta active:text-zuta focus:outline-none focus:ring shadow-md fixed bottom-0 right-0  mb-2 md:mb-4 mr-2 z-20"
          onClick={() => {
            // setActivitySelected(router.query.slug);
          }}
        >
          <span className="">
            {" "}
            {router.locale === "en" ? "Reserve" : "Riserva"}
          </span>

          {/* <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg> */}
        </a>
      </Link>
    );
  }
  return null;
};

export default BookBar;
