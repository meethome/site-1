function AboutUsExame({
    aboutUsText,
    preRequirementTitle,
    preRequirementText,
    examRulesTitle,
    examRulesText,
    psText,
    infoText,
    buttonText,
    buttonUrl
  }) {
    return (
      <div className="flex flex-col items-center justify-start text-[15.68px] text-b7">
        <div className="flex flex-col items-center justify-start space-y-4">
          <div className="leading-[130%] font-semibold">
            {aboutUsText}
          </div>
          <div className="text-15xl-3 leading-[130%] font-semibold text-heading-color w-[618.39px]">
            {preRequirementTitle}
          </div>
  
          <div className="flex space-x-4 text-[17.64px] text-heading-text font-poppins">
            <div className="rounded-lgi-6 bg-white box-border w-[539.01px] flex flex-col space-y-4 py-[39.200923919677734px] px-[19.600461959838867px] items-start justify-start border-[1px] border-solid border-gainsboro">
              <b className="leading-[130%]">
                {preRequirementText.title}
              </b>
              <div className="text-inherit tracking-[-0.02em] leading-[150%] font-inherit text-body-text1 text-left w-[499.81px]">
                <ul className="m-0 pl-[21px]">
                  {preRequirementText.items.map((item, index) => (
                    <li key={index} className="mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <div className="rounded-lgi-6 bg-blue-guideline1 box-border w-[539.01px] flex flex-col space-y-4 py-[39.200923919677734px] px-[19.600461959838867px] items-start justify-start text-white border-[1px] border-solid border-gainsboro">
              <b className="leading-[130%]">
                {examRulesTitle}
              </b>
              <div className="text-inherit tracking-[-0.02em] leading-[150%] font-inherit text-left w-[499.81px]">
                <ul className="m-0 pl-[21px]">
                  {examRulesText.items.map((item, index) => (
                    <li key={index} className="mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="flex flex-col items-center justify-start space-y-4 text-lgi-6 text-blue-guideline1">
          <div className="leading-[130%] font-semibold w-[830.08px]">
            <span>{psText}</span>
            <span className="text-heading-text">{infoText}</span>
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
  }
  
  export default AboutUsExame;
  