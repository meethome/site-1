import CustomDetails from "./faqdetail.js";

const Container1 = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-[49px] text-left text-[15.68px] text-b7 font-inter">
      <div className="flex flex-col items-center justify-start text-center">
        <div className="leading-[130%] font-semibold">FAQs</div>
        <div className="text-15xl-3 leading-[130%] font-semibold text-heading-color w-full md:w-[755.6px]">
          Common Questions From Buyers
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[9.8px] text-lgi-6 text-heading-text1">
        <CustomDetails />
      </div>
      <button className="rounded-lgi-6 shadow-[0px_3.9200923442840576px_19.6px_rgba(4,_73,_183,_0.15)] overflow-hidden flex flex-row py-[9.800230979919434px] px-[19.600461959838867px] items-center justify-start gap-[9.8px] text-[13.72px] text-blue-guideline1 border-[1px] border-solid border-blue-guideline1" href="{buttonUrl}">
  <a href="{buttonUrl}" className="flex items-center justify-start gap-[9.8px] w-full h-full text-blue-guideline1">
    <b>GOT MORE QUESTIONS? ASK AWAY!</b>
    <img className="w-[17.64px] h-[17.64px] overflow-hidden shrink-0" alt="" src="/frame20.svg" />
  </a>
</button>


    </div>
  );
};

export default Container1;
