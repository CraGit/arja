const Plan = ({ plan }) => {
  return (
    <div className="body-font">
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex flex-col relative pb-12">
              {plan.map((item, index, arr) => {
                return (
                  <div key={index} className="flex my-2">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>

                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zuta inline-flex items-center justify-center text-white relative z-10">
                      {index + 1}
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-semibold title-font text-sm mb-1 tracking-wider">
                        {item.key}
                      </h2>
                      <p className="leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="w-full h-64 md:h-full lg:w-3/5 md:w-1/2 overflow-hidden relative rounded-lg shadow-lg md:mt-0 mt-12">
            <Image
              src={`https:${korakSlika.fields.file.url}`}
              alt="step"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Plan;
