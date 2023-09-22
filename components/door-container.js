import PassSuretyContainer from "./pass-surety-container";

const DoorContainer = ({
  aboutUsText,
  openDoorsText,
  whyChooseUsText,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="relative    flex flex-col items-center justify-start gap-[39.2px] text-left text-[15.68px] text-b7 font-inter">
      <div className="flex flex-col items-start justify-start gap-[39.2px] text-center">
        <div className="flex flex-col items-center justify-start">
        <div className="relative leading-[130%] font-semibold">{aboutUsText}</div>
        <div className="relative text-15xl-3 leading-[130%] font-semibold text-heading-color max-w-screen-lg w-[618.39px]">
            {openDoorsText}
          </div>
        </div>
        <div className="relative leading-[130%] text-body-text inline-block w-full">
          {whyChooseUsText}
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[27.44px] text-[17.64px] text-heading-text font-poppins">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29.4px]">
          <PassSuretyContainer
            passingRateText="Surety of Passing"
            passingRateDescription="With a rate of 100% passes and 0% fails or re-takes, across 7000+ students since 2016, you can be certain that you’ll get the pass you need—for long-wanted IT program to have to your name."
          />
          <PassSuretyContainer
            passingRateText="Pay After You Pass"
            passingRateDescription="With our “Pay After You Pass” terms, nothing comes out of your pocket until you receive official confirmation from WGU of your exam pass."
            propAlignSelf="stretch"
            propWidth="198.94px"
          />
          <PassSuretyContainer
            passingRateText="Extensive Experience"
            passingRateDescription={`We’ve been in this business since 2016. Aside from our proxy software & process that ensures 0% detection, over the years, we’ve built a team of specialized IT experts that have ensured 100% exam pass rates for all WGU’s 10 Bachelor programs & 5 Masters.`}
            propAlignSelf="unset"
            propWidth="198.94px"
          />
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-2 gap-[29.4px]">
          <PassSuretyContainer
            passingRateText="Security of a Guarantee"
            passingRateDescription="While we’re 100% certain of passing your WGU exams, we still offer a guarantee if you hypothetically don’t pass: you pay us nothing for the re-take, we sit the exam for you, and ensure you get the pass."
            propAlignSelf="stretch"
            propWidth="298.91px"
          />
          <PassSuretyContainer
            passingRateText="Speedy Support"
            passingRateDescription="For anything you need, we’re always just a WhatsApp away. We respond speedily and make sure you’re always in crystal-clear clarity — so you stay working or parenting while earning your graduate degrees"
            propAlignSelf="stretch"
            propWidth="198.94px"
          />
        </div>
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
  );
};

export default DoorContainer;
