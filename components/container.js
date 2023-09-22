import ConnectWithUsContainer from "./connect-with-us-container";

const Container = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 text-center text-sm text-heading-text font-inter">
      <div className="w-full text-b7">
        <div className="font-semibold">About Us</div>
        <div className="text-2xl font-semibold text-heading-color">How It Works</div>
      </div>
      <div className="flex flex-col items-start justify-start gap-4 text-left text-2xl">
        <ConnectWithUsContainer
          sectionNumber="#1"
          connectWithUsText="Connect with us, "
          ctaText="enroll at WGU"
          programInterestText="Get in touch with our support team. Tell us what IT program you’re interested in. And we’ll tell you total costs. Then you enroll in WGU to kick-off everything officially"
          cardNumber="#2"
          examReminderText="24 hours before exams, "
          installationAndTestingTim="we install & test"
          examReminderMessage="Whenever you have an exam, we’ll schedule to connect 24 hours before. We’ll install our proxy tools. Run a test to make sure everything’s perfect. Then give you the thumbs up & see you the next day."
          propWidth="50.96px"
          propWidth1="369.47px"
          propAlignSelf="stretch"
        />
        <ConnectWithUsContainer
          sectionNumber="#3"
          connectWithUsText="You sit in front of Laptop/PC, "
          ctaText="our experts answer"
          programInterestText="On the big day, we’ll connect 30 minutes before the actual exam starts. Then we’ll take control remotely to answer the questions while you sit in front of your computer for formalities."
          cardNumber="#4"
          examReminderText="You pass, pay "
          installationAndTestingTim="within 24 hours"
          examReminderMessage="When the exam’s complete: congrats, we’re certain you’ve passed! Only once you receive official confirmation of your pass from EGU will payment be due within 24 hours—in anyway that suits you."
          propWidth="50.96px"
          propWidth1="369.47px"
          propAlignSelf="stretch"
        />
      </div>
      <div className="text-lgi-6 font-semibold">
        <span>{`And repeat for all required exams— until you get your Bachelor’s or Masters `}</span>
        <span className="text-blue-guideline1">in just half a year</span>
      </div>
    </div>
  );
};

export default Container;