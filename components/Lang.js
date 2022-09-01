import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Lang = () => {
  const router = useRouter();
  return (
    <Link href={router.asPath} locale={router.locale === "hr" ? "en" : "hr"}>
      <a className="block h-16 leading-[4rem] border-b-4 border-transparent hover:opacity-90 transition-all duration-100">
        <Image
          src={router.locale === "hr" ? "/images/en.svg" : "/images/hr.svg"}
          alt="language"
          height="64px"
          width="25px"
        />
      </a>
    </Link>
  );
};

export default Lang;
