import { useMemo } from "react";

const ConnectWithUsContainer = ({
  sectionNumber,
  connectWithUsText,
  ctaText,
  programInterestText,
  cardNumber,
  examReminderText,
  installationAndTestingTim,
  examReminderMessage,
  propWidth,
  propWidth1,
  propAlignSelf,
}) => {
  const bStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const connectWithUsContainerStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
<div className="flex flex-col sm:flex-row md:flex-row items-start justify-start gap-[29.4px] text-left text-15xl-3 text-heading-text font-inter">
      <div className="self-stretch rounded-lgi-6 bg-white flex flex-col p-[39.200923919677734px] items-start justify-start gap-[19.6px] border-[1px] border-solid border-whitesmoke-200">
        <div className="flex flex-row items-center justify-start gap-[9.8px]">
          <b
            className="relative inline-block w-[44.1px] shrink-0"
            style={bStyle}
          >
            {sectionNumber}
          </b>
          <b
            className="relative text-lgi-6 inline-block w-[236.19px] shrink-0"
            style={connectWithUsContainerStyle}
          >
            <p className="m-0">{connectWithUsText}</p>
            <p className="m-0">{ctaText}</p>
          </b>
        </div>
        <div className="relative text-[15.68px] tracking-[-0.02em] leading-[150%] font-poppins text-body-text inline-block w-[460.61px]">
          {programInterestText}
        </div>
      </div>
      <div
        className="rounded-lgi-6 bg-white flex flex-col p-[39.200923919677734px] items-start justify-start gap-[19.6px] border-[1px] border-solid border-whitesmoke-200"
        style={frameDivStyle}
      >
        <div className="flex flex-row items-center justify-start gap-[9.8px]">
          <b className="relative inline-block w-[46.06px] shrink-0">
            {cardNumber}
          </b>
          <b className="relative text-lgi-6 inline-block w-[369.47px] shrink-0">
            <p className="m-0">{examReminderText}</p>
            <p className="m-0">{installationAndTestingTim}</p>
          </b>
        </div>
        <div className="relative text-[15.68px] tracking-[-0.02em] leading-[150%] font-poppins text-body-text1 inline-block w-[460.61px]">
          {examReminderMessage}
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUsContainer;
