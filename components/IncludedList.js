import { useRouter } from "next/router";

const IncludedList = ({ included, notIncluded }) => {
  const router = useRouter();
  return (
    <div className="text-gray-600 body-font">
      <div className="container py-3 mx-auto">
        <div className="flex flex-wrap">
          {/* INCLUDED LIST */}
          {included && (
            <div className="py-3 lg:w-1/4 w-1/2">
              <h3 className="font-semibold title-font tracking-widest text-gray-900 mb-4 text-sm  sm:text-left">
                {router.locale === "en" ? "Included:" : "Incluso:"}
              </h3>
              <ul
                className="flex flex-col items-start text-left -mb-1 space-y-2.5
"
              >
                {included.map((item, index) => (
                  <li key={index}>
                    <span className="bg-zuta text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NOT INCLUDED LIST */}
          {notIncluded && (
            <div className="p-3 lg:w-1/4 w-1/2">
              <h3 className="font-semibold title-font tracking-widest text-gray-900 mb-4 text-sm  sm:text-left">
                {router.locale === "en" ? "Not included:" : "Non incluso:"}
              </h3>
              <ul className="flex flex-col items-start text-left  -mb-1 space-y-2.5">
                {notIncluded.map((item, index) => (
                  <li key={index}>
                    <span className="bg-gray-300 text-black w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncludedList;
