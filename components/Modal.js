import Image from "next/image";

export default function Modal({
  clickedImage,
  handleRotationRight,
  handleRotationLeft,
  setClickedImage,
}) {
  function handleClose(e) {
    if (e.target.classList.contains("dismiss")) {
      setClickedImage(null);
    }
  }

  return (
    <div
      className="dismiss fixed inset-0 bg-black/80 bg-opacity-50 overflow-y-auto h-full w-full z-40 flex justify-center items-center"
      onClick={handleClose}
    >
      <div className="m-3 md:m-0 w-full h-[85vh] md:h-full  max-w-2xl relative z-50 ">
        <Image
          src={`https:${clickedImage.fields.file.url}`}
          alt={clickedImage.fields.file.title}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <button
        className="h-20 w-10 z-50 absolute top-[50%] right-3 text-black"
        onClick={handleRotationRight}
      >
        <svg
          baseProfile="tiny"
          height="48px"
          id="Layer_1"
          version="1.2"
          viewBox="0 0 24 24"
          width="48px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path d="M10,20c-0.802,0-1.555-0.312-2.122-0.879C7.312,18.555,7,17.801,7,17s0.312-1.555,0.879-2.122L10.757,12L7.879,9.121    C7.312,8.555,7,7.801,7,7s0.312-1.555,0.879-2.122c1.133-1.132,3.109-1.133,4.243,0.001L19.243,12l-7.122,7.121    C11.555,19.688,10.802,20,10,20z M10,6C9.732,6,9.482,6.104,9.293,6.292C9.104,6.482,9,6.733,9,7s0.104,0.518,0.293,0.707    L13.585,12l-4.292,4.293C9.104,16.482,9,16.732,9,17s0.104,0.518,0.293,0.707c0.378,0.379,1.037,0.378,1.414,0.001L16.415,12    l-5.708-5.707C10.518,6.104,10.268,6,10,6z" />
            </g>
          </g>
        </svg>
      </button>
      <button
        className="h-20 w-10 z-50 absolute top-[50%] left-3 text-black"
        onClick={handleRotationLeft}
      >
        <svg
          baseProfile="tiny"
          height="48px"
          id="Layer_1"
          version="1.2"
          viewBox="0 0 24 24"
          width="48px"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <g>
              <path d="M13,20c-0.802,0-1.555-0.312-2.122-0.879L3.757,12l7.122-7.121c1.133-1.133,3.11-1.133,4.243,0    C15.688,5.445,16,6.199,16,7s-0.312,1.555-0.879,2.122L12.243,12l2.878,2.879C15.688,15.445,16,16.199,16,17    s-0.312,1.555-0.879,2.122C14.555,19.688,13.802,20,13,20z M6.585,12l5.708,5.707c0.378,0.378,1.037,0.377,1.414,0    C13.896,17.518,14,17.268,14,17s-0.104-0.518-0.293-0.707L9.415,12l4.292-4.293C13.896,7.518,14,7.267,14,7    s-0.104-0.518-0.293-0.707c-0.378-0.379-1.037-0.378-1.414-0.001L6.585,12z" />
            </g>
          </g>
        </svg>
      </button>
      <button
        className="dismiss text-gray-50 z-50 absolute top-4 right-4"
        onClick={handleClose}
      >
        <svg
          height="24px"
          fill="white"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          className="dismiss"
        >
          <path
            className="dismiss"
            d="M81.646,64l22.248-22.249c3.48-3.48,3.474-9.131-0.019-12.623l-5.006-5.005  c-3.489-3.49-9.142-3.499-12.622-0.019L64,46.354L41.753,24.106c-3.484-3.483-9.133-3.472-12.624,0.018l-5.005,5.005  c-3.491,3.492-3.501,9.14-0.018,12.623L46.354,64L24.108,86.246c-3.483,3.484-3.472,9.133,0.018,12.623l5.005,5.006  c3.492,3.492,9.14,3.502,12.623,0.018L64,81.647l22.247,22.246c3.48,3.481,9.131,3.475,12.622-0.019l5.006-5.006  c3.489-3.489,3.498-9.142,0.019-12.622L81.646,64z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}
