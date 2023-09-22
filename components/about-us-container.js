import React from 'react';

const AboutUsContainer = ({ title, subtitle1, paragraphText, buttonText, urlButton }) => {
  return (
    <div className="flex flex-col lg:flex-row px-5 py-10 mb-10 items-center justify-center lg:items-start lg:justify-start text-[15.68px] text-b7 font-inter w-full lg:w-5/6">
      <div className="flex flex-col w-full lg:w-1/2 items-center lg:items-start text-center lg:text-left">
        <div className="text-2xl font-semibold leading-[130%] mb-0">{title}</div>
        <p className="relative text-15xl-3 font-semibold text-heading-color leading-[130%] whitespace-pre-wrap inline-block w-[520.39px] mt-0">{subtitle1}</p>
        <p className="text-base text-body-text leading-[130%] w-[619.37px] mb-4">{paragraphText}</p>

        {/* Add link to the button */}
        <a href={urlButton} className="items-center lg:items-start">
          <button style={{ marginTop: '40px'}} 
                  className="relative rounded-lgi-6 bg-blue-guideline1 shadow-[0px_3.9200923442840576px_19.6px_rgba(4,_73,_183,_0.15)] overflow-hidden flex flex-row py-[9.800230979919434px] px-[19.600461959838867px] items-center justify-center gap-[9.8px] text-[13.72px] text-white mt-4">
            <b className="relative">{buttonText}</b>
            <img className="relative w-[17.64px] h-[17.64px]" alt="" src="/frame.svg" />
          </button>
        </a>
      </div>

      <div className="w-full lg:w-1/2 lg:ml-40 items-center lg:items-start">
        <img className="w-full h-auto lg:scale-100" alt="" src="/objects1.svg" style={{ imageRendering: 'crisp-edges', transform: 'scale(0.95)' }} />
      </div>
    </div>
  );
};

export default AboutUsContainer;
