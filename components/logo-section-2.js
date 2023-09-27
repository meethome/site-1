import React from "react";

const Logosection2 = (props) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 text-left head">
        <div className="logo basis-[15%]">
          <b className="logo text-[37.23px] text-blue-guideline1 ">
            {props.logoText}
          </b>
          <div className="text-[13.72px] text-body-text inline-block mt-2 ">
            {props.descriptionText}
          </div>
        </div>
        <div className="pages mt-9 basis-[15%]">
          <b className="">{props.pagesHeading}</b>
          <div className="mt-4 flex flex-col items-start justify-center gap-[9.8px] text-[13.72px] text-body-text">
            {props.pagesList.map((page, index) => (
              <div key={index} className="">
                <div className="">{page}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact basis-[15%]">
          <b className="">{props.contactHeading}</b>
          <div className=" text-[15.68px] text-body-text mt-4">
            <div className=" leading-[140%]   ">{props.addressText}</div>
            <div className=" leading-[140%]">{props.phoneNumber}</div>
            <div className=" leading-[140%]">{props.emailAddress}</div>
          </div>
        </div>
        <div className="dmo mt-9 basis-[16%]">
          <div className=" text-lgi-6 text-heading-text">
            <div>
              <b className="">{props.missOutText}</b>
            </div>
            <div className=" text-[15.68px] leading-[140%] text-body-text inline-block mt-4">
              {props.missOutDescription}
            </div>
            <div className=" flex text-[13.72px] text-white bg-whitesmoke-100 mt-2 items-center">
              <div className=" rounded-lg-6 bg-whitesmoke-100">
                <input
                  type="email"
                  className=" text-[15.68px] leading-[140%] text-body-text-color text-center"
                  placeholder={props.emailPlaceholder}
                />
              </div>
              <div className="">
                <button className="box-border items-center justify-center bg-blue-guideline ">
                  <b>{props.subscribeButtonText}</b>
                </button>
              </div>
            </div>
            <div className="flex justify-center my-2">
              <img
                className="max-w-full max-h-full mt-2 overflow-hidden margin-auto"
                alt=""
                src={props.groupSrc}
              />
            </div>
            <div className="list flex flex-row items-start justify-start gap-[0.4em] flex-wrap text-[15.68px] text-body-text mt-2">
              <div className="inline-block w-[56.84px] h-[19.6px] shrink-0">
                {props.privacyText}
              </div>
              <div className=" inline-block w-[91.14px] h-[19.6px] shrink-0">
                {props.termsOfUseText}
              </div>
              <div className=" inline-block w-[56.84px] h-[19.6px] shrink-0">
                {props.cookiesText}
              </div>
              <div className=" inline-block w-[56.84px] h-[19.6px] shrink-0">
                {props.supportText}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col"> */}
      <div className="max-w-full max-h-full text-center">
        <img
          className="max-w-full max-h-full overflow-hidden "
          alt=""
          src={props.vectorSrc}
        />
      </div>
      <div className="inline-block text-mini-7 font-inter text-body-text">
        {props.copyrightText}
      </div>
      {/* </div> */}
    </>
  );
};

export default Logosection2;
