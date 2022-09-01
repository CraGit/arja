import Link from "next/link";

const MenuItem = ({ href, locale, name, active }) => {
  return (
    <Link href={href} locale={locale}>
      <a
        className={`block md:h-16  leading-10 md:leading-[4rem] md:border-b-4 border-transparent hover:text-zuta ${
          active ? "text-zuta underline decoration-zuta underline-offset-8" : ""
        }`}
      >
        {name[locale]}
      </a>
    </Link>
  );
};

export default MenuItem;
