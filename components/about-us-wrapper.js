const AboutUsWrapper = ({ title, description, buttonText, buttonUrl }) => {
  return (
    <div className="lg:pl-40 flex flex-col lg:flex-row p-5 text-left text-[15.68px] text-b7 font-inter">
      <img
        className="w-full lg:w-1/3 h-auto overflow-hidden"
        style={{ imageRendering: 'crisp-edges', transform: 'scale(0.80)' }}
        alt=""
        src="/frame3.svg"
      />

      <div className="flex flex-col lg:w-2/3 p-5 pt-20 pl-20">
        <div className="flex flex-col items-start justify-start mb-5">
          <div className="leading-[130%] font-semibold">{title}</div>
          <div className="text-15xl-3 leading-[130%] font-semibold text-heading-color w-4/6">
            {description}
          </div>
        </div>

        <div className="leading-[130%] text-body-text mb-5 w-5/6">
          Plus our exam proxy fee—making sure you complete the entire program in the shortest time & for the lowest price, while 100% guaranteeing your pass
        </div>

        <a className="items-center lg:items-start" href={buttonUrl}>
          <button
            style={{ marginTop: '40px' }}
            className="relative rounded-lgi-6 bg-blue-guideline1 shadow-[0px_3.9200923442840576px_19.6px_rgba(4,_73,_183,_0.15)] overflow-hidden flex flex-row py-[9.800230979919434px] px-[19.600461959838867px] items-center justify-center gap-[9.8px] text-[13.72px] text-white mt-4"
          >
            <b className="relative">{buttonText}</b>
            <img className="relative w-[17.64px] h-[17.64px]" alt="" src="/frame.svg" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutUsWrapper;
