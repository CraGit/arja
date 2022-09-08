import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Footer = ({ slikaFooter }) => {
  const router = useRouter();
  return (
    <footer className="text-white bg-black lg:grid lg:grid-cols-5">
      <aside className="hidden lg:relative lg:col-span-2 lg:block">
        <Image
          className="absolute inset-0 object-cover w-full"
          src="/images/footer/footer.jpg"
          alt="Aria Interiers"
          objectFit="cover"
          layout="fill"
        />
      </aside>
      <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <div className="font-medium">
              <span className="text-xl tracking-widest uppercase underline underline-offset-8 decoration-zuta">
                Abonos d.o.o. - SPLIT{" "}
              </span>
              <ul className="mt-2 space-y-1">
                <a
                  href="https://www.google.com/maps?q=ARJA+interiers,+Mostarska+ul.+1,+21000,+Split&ftid=0x13355e6a5c03a121:0xf05df8d824668c48&hl=hr-HR&gl=hr&entry=gps&g_ep=CAISBjYuMzMuMRgAINeCAw%3D%3D&g_st=iw"
                  className="hover:opacity-75 underline underline-offset-4 decoration-dotted"
                >
                  <li>Mostarska ulica 1</li>
                  <li>21000 Split</li>
                </a>
                <li>
                  <a
                    className="mt-2 hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385912288232"
                  >
                    Nino: 091 228 82 32
                  </a>
                </li>

                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385919280241"
                  >
                    Božidar: 091 928 0241
                  </a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="mailto:abonos.st@gmail.com"
                  >
                    E-mail: abonos.st@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-medium">
              <span className="text-xl tracking-widest uppercase underline underline-offset-8 decoration-zuta">
                Internus d.o.o. - ZADAR{" "}
              </span>
              <ul className="mt-2 space-y-1">
                <a
                  href="https://www.google.com/maps/place/INTERNUS+d.o.o./@44.1281398,15.2530757,17z/data=!3m1!4b1!4m5!3m4!1s0x4761f077fef3b547:0x409fa87762da9120!8m2!3d44.1281012!4d15.2551894?hl=hr-HR"
                  className="hover:opacity-75 underline underline-offset-4 decoration-dotted"
                >
                  <li>Hrvatskog sabora 26</li>
                  <li>23000 Zadar</li>
                </a>
                <li>
                  <a
                    className="mt-2 hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+38523324111"
                  >
                    Tel.: 023 324 111
                  </a>
                </li>
                <li>
                  <a className="mt-2 ">Fax: 023 324 124</a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="tel:+385913214577"
                  >
                    Danijel: 091 3214 577
                  </a>
                </li>
                <li>
                  <a
                    className="mt-2 
                    hover:opacity-75 underline underline-offset-4 decoration-dotted"
                    href="mailto:info.internus@gmail.com"
                  >
                    E-mail: info.internus@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex mt-16 space-x-3">
            <a
              className="p-2 border rounded-full border-white/25 hover:opacity-75 cursor-pointer"
              href="https://www.facebook.com/arja1interiers/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Facebook </span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              className="p-2 border rounded-full border-white/25 hover:opacity-75 cursor-pointer"
              href="https://www.instagram.com/arja_interiers/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only"> Instagram </span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="pt-12 mt-12 border-t border-gray-800">
          <div className="text-sm text-gray-300 sm:items-center sm:justify-between sm:flex">
            <div className="flex space-x-3">
              <Link className="hover:opacity-75" href="/pravila-privatnosti">
                {router.locale === "hr"
                  ? "Pravila privatnosti"
                  : "Privacy Policy"}
              </Link>
            </div>
            <p className="mt-4 sm:mt-0">© 2022 Arja Interiers</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
