const LogoSection = (props) => {
  return (
    <div className="  absolute h-[4.93%] top-[95.07%]  bottom-[0%] left-[0px] w-[1411.23px] text-left text-mini-7 text-darkgray font-inter">
      <div className="absolute h-[98.33%] top-[1.67%] bottom-[0%] left-[0px] bg-white w-[1411.23px]" />

      <div className="absolute h-[5.03%] top-[85.67%] left-[calc(50%_-_131.32px)] inline-block w-[259.71px]">
        {props.copyrightText}
      </div>

      <div className="absolute top-[270.49px] left-[989.82px] flex flex-row items-start justify-start gap-[29.4px]">
        <div className="relative inline-block w-[56.84px] h-[19.6px] shrink-0">
          {props.privacyText}
        </div>
        <div className="relative inline-block w-[91.14px] h-[19.6px] shrink-0">   
          {props.termsOfUseText}
        </div>
        <div className="relative inline-block w-[56.84px] h-[19.6px] shrink-0">
          {props.cookiesText}
        </div>
        <div className="relative inline-block w-[56.84px] h-[19.6px] shrink-0">
          {props.supportText}
        </div>
      </div>

      <img
        className="absolute h-[0.5%] w-[88.64%] top-[80.14%] right-[5.19%] bottom-[19.37%] left-[6.16%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={props.vectorSrc}
      />

      <b className="absolute top-[0px] left-[125.44px] text-[37.23px] text-blue-guideline1">
        {props.logoText}
      </b>

      <div className="absolute h-[63.65%] w-[35.86%] top-[0.5%] right-[33.47%] bottom-[35.85%] left-[30.67%] text-lgi-6 text-heading-text">
        <div className="absolute h-[75.02%] w-[19.17%] top-[24.98%] right-[80.83%] bottom-[0%] left-[0%] flex flex-col items-start justify-start gap-[14.7px]">
          <b className="relative">{props.pagesHeading}</b>  
          <div className="flex flex-col items-start justify-start gap-[9.8px] text-[13.72px] text-body-text">
            {props.pagesList.map((page, index) => (
              <div key={index} className="relative w-[97.02px] h-[16.66px]">
                <div className="absolute top-[0px] left-[0px] inline-block w-[97.02px] h-[16.66px]">
                  {page}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-[0px] left-[196.37px] w-[309.69px] h-[167.48px]">
          <b className="absolute top-[0px] left-[0px]">
            {props.contactHeading}
          </b>
          <div className="absolute top-[38.22px] left-[0px] flex flex-col items-start justify-start gap-[9.8px] text-[15.68px] text-body-text">
            <div className="relative leading-[140%] inline-block w-[309.69px] h-[65.66px] shrink-0">
              {props.addressText}
            </div>
            <div className="relative leading-[140%]">{props.phoneNumber}</div>
            <div className="relative leading-[140%]">{props.emailAddress}</div>
          </div>
        </div>
      </div>

      <img
        className="absolute h-[6.07%] w-[11.08%] top-[64.29%] right-[19.95%] bottom-[29.64%] left-[68.97%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={props.groupSrc}
      />

      <div className="absolute top-[72.52px] left-[125.44px] text-[13.72px] text-body-text inline-block w-[259.71px]">
        {props.descriptionText}
      </div>

      <div className="absolute h-[41.34%] w-[25.69%] top-[16.26%] right-[5.33%] bottom-[42.4%] left-[68.97%] text-lgi-6 text-heading-text">
        <b className="absolute h-[14.6%] w-[39.35%] top-[0%] left-[0%] inline-block">
          {props.missOutText}
        </b>
        <div className="absolute h-[23.72%] w-full top-[23.35%] left-[0%] text-[15.68px] leading-[140%] text-body-text inline-block">
          {props.missOutDescription}
        </div>
        <div className="absolute h-[28.59%] w-full top-[71.41%] right-[0%] bottom-[0%] left-[0%] text-[13.72px] text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg-6 bg-whitesmoke-100">
            <input
              type="email"
              className="absolute h-[46.81%] w-[33.42%] top-[27.66%] left-[6.47%] text-[15.68px] leading-[140%] text-body-text-color text-center"
              placeholder={props.emailPlaceholder}
            />
          </div>

          <div className="absolute h-full w-[28.57%] top-[0%] right-[0%] bottom-[0%] left-[71.43%]">
            <button className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg-6 bg-blue-guideline flex flex-row py-[14.700346946716309px] px-[19.600461959838867px] box-border items-center justify-center">
              <b>{props.subscribeButtonText}</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
