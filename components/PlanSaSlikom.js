import Image from "next/image";
const PlanSaSlikom = ({ planSaSlikom }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {planSaSlikom.map((item, index) => {
        return (
          <div className="flex flex-col relative overflow-hidden leading-5" key={index}>
            <Image
              className="w-full h-56 rounded-xl"
              src={`https:${item.fields.file.url}`}
              alt=""
              height={300}
              width={400}
            />
            <p className="text-sm absolute top-4 left-4 text-white bg-zuta/60 rounded-full w-5 text-center">
              {index + 1}.
            </p>

            <div className="mt-3 px-3">
              <p className="mt-2">{item.fields.description}</p>
            </div>
          </div>
        );
      })}

      {/* <div className="w-full h-64 md:h-full lg:w-3/5 md:w-1/2 overflow-hidden relative rounded-lg shadow-lg md:mt-0 mt-12">
            <Image
              src={`https:${korakSlika.fields.file.url}`}
              alt="step"
              layout="fill"
              objectFit="cover"
            />
          </div> */}
    </div>
  );
};

export default PlanSaSlikom;
