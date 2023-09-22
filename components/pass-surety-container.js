import { useMemo } from "react";

const PassSuretyContainer = ({
  passingRateText,
  passingRateDescription,
  propAlignSelf,
  propWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const suretyOfPassingStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
  className="self-stretch rounded-lgi-6 bg-white flex flex-col py-[29.400693893432617px] px-[19.600461959838867px] items-start justify-start gap-[19.6px] text-left text-[17.64px] text-heading-text font-poppins border-[1px] border-solid border-gainsboro"
  style={frameDiv1Style}
>
  <div className="flex flex-row items-center justify-center gap-[9.8px]">
    <img
      className="relative w-[23.52px] h-[23.52px] overflow-hidden shrink-0"
      alt=""
      src="/frame4.svg"
    />
    <b
      className="relative leading-[130%] inline-block w-[198.94px] h-[22.54px] shrink-0 overflow-hidden whitespace-normal break-word"
      style={suretyOfPassingStyle}
    >
      {passingRateText}
    </b>
  </div>
  <div className="relative text-[15.68px] tracking-[-0.02em] leading-[150%] text-body-text1 inline-block w-[362.61px] overflow-hidden whitespace-normal break-word">
    {passingRateDescription}
  </div>
</div>

  

  );
};

export default PassSuretyContainer;
