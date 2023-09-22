const CardContainer = ({
  dimensionCode,
  featureDescription,
  tuitionDescription,
  degreeCostDescription,
}) => {
  return (
    <div className="rounded-lgi-6 flex flex-col py-[29.400693893432617px] px-[19.600461959838867px] items-start justify-start gap-[19.6px] text-left text-lgi-6 text-heading-text font-inter border-[1px] border-solid border-gainsboro">
      <div className="rounded-3xs-8 bg-guideline flex flex-row p-[9.800230979919434px] items-start justify-start border-[2px] border-solid border-blue-guideline1">
        <img
          className="relative w-[29.4px] h-[29.4px] overflow-hidden shrink-0"
          alt=""
          src={dimensionCode}
        />
      </div>
      <div className="relative leading-[130%] font-semibold mb-2">
        {featureDescription}
      </div>
      <div className="relative text-[15.68px] leading-[130%] text-body-text max-w-[362.61px]">
        <p className="m-0">{tuitionDescription}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{degreeCostDescription}</p>
      </div>
    </div>
  );
};

export default CardContainer;
