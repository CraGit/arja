const Section = ({ children, naslov, podnaslov, uvod }) => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        {podnaslov && (
          <p className="text-base leading-4 text-gray-600 dark:text-gray-200 text-center">
            {podnaslov}
          </p>
        )}
        {naslov && (
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl text-center underline underline-offset-8 decoration-zuta mb-12 sm:mb-16 ">
            {naslov}
          </h2>
        )}
        {uvod && (
          <p className="text-base leading-2 text-gray-900 dark:text-gray-200 text-center bg-gray-100 rounded-lg p-2 mb-4 shadow-sm">
            {uvod}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
