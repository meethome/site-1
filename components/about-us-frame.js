import CardContainer from "./card-container";

const AboutUsFrame = () => {
  return (
    <div className="absolute flex flex-col items-center justify-start text-center text-[15.68px] text-b7 font-inter">
      <div className="relative flex flex-col items-center justify-start">
        <div className="relative leading-[130%] font-semibold">About Us</div>
        <div className="relative text-15xl-3 leading-[130%] font-semibold text-heading-color inline-block mt-4">
          You Need To Know
        </div>
      </div>
      <div className="relative leading-[130%] text-body-text inline-block mt-4 w-[793.82px]">
  <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s,
  </p>
</div>
      <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29.4px] items-start justify-start text-left text-lgi-6 text-heading-text">
          <CardContainer
            dimensionCode="/capa-1.svg"
            featureDescription="The Traditional Way"
            tuitionDescription="Most universities charge tuition based on how many credits you take: so the more courses you take, the more money you pay. "
            degreeCostDescription="The average Bachelor’s degree costs $16,000 for 1 year and takes 4 years — costing you a total of at least $64,000 plus 4 years of missed out earnings, career, and family time"
          />
          <CardContainer
            dimensionCode="/icons.svg"
            featureDescription="The WGU Way"
            tuitionDescription="WGU charges tuition based on a flatrate, 6-month term: so whether
            you take credits equivalent to 1 year or 4 years in those 6
            months, the fee stays the same."
            degreeCostDescription="With WGU’s average IT Bachelor’s costing a flat $3000-4000 for
            their 6- month term, that means you more credits you can do within
            that tim."
          />
          <CardContainer
            dimensionCode="/frame1.svg"
            featureDescription="Doing It Proxy"
            tuitionDescription="To make the most of WGU’s way—so you can gain an entire Bachelor’s or Masters within just 6 months for their flat fee—you will either need to: "
            degreeCostDescription="Have the knowledge to ace every exam within that time (OR) Have a team of experts sitting the exams as proxies for you. And as proxy exam sitters since 2016, that’s what we’re here to do for you."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsFrame;
