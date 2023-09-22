import { useMemo } from "react";

const AccreditationCard = ({
  imageDescription,
  featureImageUrl,
  universityDescription,
  propWidth,
}) => {
  const fullAccreditationStyle = useMemo(() => {
    return {
      width: propWidth || '100%', // Use 100% as a fallback if propWidth is not provided
    };
  }, [propWidth]);

  return (
    <div className="relative w-[294.99px] h-[281.27px] text-left text-[17.64px] text-heading-text font-inter">
      <div className="absolute top-[0px] left-[0px] rounded-lgi-6 box-border w-[294.99px] h-[281.27px] border-[1px] border-solid border-blue-guideline1" />
      <div className="absolute top-[16.66px] left-[19.6px] flex flex-col items-start justify-start gap-[29.4px]">
        <img
          className="relative w-[72.52px] h-[72.52px]"
          alt=""
          src={imageDescription}
        />
        <div className="flex flex-col items-start justify-start gap-[9.8px]">
          <div
            className="relative leading-[130%] font-semibold inline-block w-[198.94px] h-[22.54px] shrink-0"
            style={fullAccreditationStyle}
          >
            {featureImageUrl}
          </div>
          <div className="relative text-[15.68px] leading-[144.1%] text-body-text-color1 inline-block w-[255.79px]">
            {universityDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccreditationCard;
