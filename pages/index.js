import Header from "../components/header";
import AccreditationCard from "../components/accreditation-card";
import AboutUsContainer from "../components/about-us-container";
import AboutUsFrame from "../components/about-us-frame";
import AboutUsWrapper from "../components/about-us-wrapper";
import Container from "../components/container";
import DoorContainer from "../components/door-container";
import Container1 from "../components/container1";
import LogoSection from "../components/logo-section";
import Hero from "../components/hero/hero";
import Brands from "../components/brands"
import Backstyles from "../components/bg-style"
import AboutUsExame from "../components/aboutUsExame" 

const Homepage = () => {
  return (
    // <section>
    <section className="relative bg-white w-full h-full overflow-hidden text-center text-20xl-2 text-heading-text-color font-inter">
      <Backstyles />
      <Header
        logoText="Logo"
        logoUrl="/home"
        navItems={[
          { text: "Lorem Ipsum 1", url: "/page1" },
          { text: "Lorem Ipsum 2", url: "/page2" },
          { text: "Lorem Ipsum 3", url: "/page3" },
          { text: "Lorem Ipsum 4", url: "/page4" },
        ]}
        contactText="Contact Us"
        contactHref="http://meet508.tech"
      />
      <Hero
        heading="Earn your complete IT university education without you putting in your own time"
        description="Whether you’re working full time or occupied with your family, make your dream IT career a reality at the lowest price possible & in the least amount of time"
        buttonText="SEE HOW EXACTLY WORK"
        buttonLink="https://example.com" // Specify the link you want here
      />

      <div className="flex flex-col items-center justify-center mt-10 mb-10 lg:mb-8 xl:mb-6 2xl:mb-4 ">
        <Brands />

        <section className="grid gap-6 mx-auto mt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 lg-plus:grid-cols-4 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-40">
          <AccreditationCard
            imageDescription="/group-1000002136.svg"
            featureImageUrl="Full Accreditation"
            universityDescription="From Award-winning WGU University"
          />
          <AccreditationCard
            imageDescription="/group-10000021361.svg"
            featureImageUrl="A Team of Experts"
            universityDescription="Sitting 7000+ Proxy Exams Since 2016"
          />
          <AccreditationCard
            imageDescription="/group-10000021362.svg"
            featureImageUrl={`0% Detection & Retakes`}
            universityDescription="100% Pass Rates"
          />
          <AccreditationCard
            imageDescription="/group-10000021363.svg"
            featureImageUrl="Unique Guarantee"
            universityDescription="with Pay After You Pass"
          />
        </section>
      </div>
      <br />

      <section className="flex flex-col gap-80  items-center">
        <div className="relative flex justify-center items-center mt-10 lg:mt-8 xl:mt-6 2xl:mt-4 md:mt-20 lg:mt-24 xl:mt-32 2xl:mt-100 md:pt-100">
          <AboutUsContainer
            title="About Us"
            subtitle1="No More Big Sacrifices To Earn Your"
            paragraphText="Getting a Bachelor’s degree is a #1 surest way to multiply your salary. Problem is: its costs are huge, usually requiring debt, and it takes years — time that you simply don’t have when you’re in a job or raising a family. And yet: getting that accreditation is still your dream. Because of how many door it will open for you, now and in the future. Through WGU—an award-winning, online American university that’s changed the lives of over 100,000 of professionals & parents yearly—you can you earn your certifications at a fraction of the cost and time. And our job: to sit the exams for you, so your time is time is never ever taken up and your pass is peace-of-mind guaranteed"
            buttonText="FIND OUT WHAT PROGRAMS ARE AVAILABLE NOW"
            urlButton="http://meet508.tech" // Pass the URL here
          />
        </div>
          <div className="flex justify-center items-center lg:mt-0 md:mt-40 sm:mt-80  xs:mt-[350px]">
            <AboutUsFrame />
          </div>          
      </section>
      <section className="flex flex-col items-center justify-center mt-80 mb-20 md:mt-[400px] sm:mt-[650px]  xs:mt-[750px]"> {/* Adjust mt-20 and mb-20 as per your need */}
      <AboutUsWrapper
  title="About Us"
  description="Gain an IT Bachelor’s or Masters in 6 months for $3000-4000"
  buttonText="FIND OUT TOTAL COST NOW"
  buttonUrl="https://example.com"
/>
      </section>

      <section className="flex flex-col items-center justify-center"> 
      <Container />
      </section>
      <section className="flex flex-col items-center justify-center mt-40"> 
      <DoorContainer 
      aboutUsText="About Us"
      openDoorsText="Finally open the doors you’ve always wanted to walk through"
      whyChooseUsText="Why choose CBTProxy to help you jump start your career"
      buttonText="SECURE YOUR IT BACHELOR’S OR MASTERS NOW"
      buttonUrl="https://example.com"
    />
      </section>

      <section className="flex flex-col items-center justify mt-40">
<AboutUsExame
        aboutUsText="About Us"
        preRequirementTitle="Pre-requirement & Exam Rules"
        preRequirementText={{
          title: 'Pre-requirements for us to sit a proxy exam for you',
          items: [
            'Your PC or Laptop must have Windows 10 or 11 (64-bit) installed',
            'Your device must have no corporate firewall enabled',
            'We will have to mutually agree on a time to book your exam slot',
            'To sit your online WGU exam, your device must have a camera and microphone',
            'You must be able to join 30 minutes before the exam starts',
            'You must be have your ID ready—not for us, but to show the proctor to be allowed to start the exam',
            'You will have to remain seated and act like you’re undertaking the exam while we do it remotely on your behalf'
          ]
        }}
        examRulesTitle="WGU exam rules for all online proctoring"
        examRulesText={{
          items: [
            'When you’re sitting the exam, no one is permitted in your work area for any reason',
            'You cannot leave your work area for any reason (only in break time can you leave)',
            'You cannot use scratch paper, take physical notes, or talk',
            'Items by mobiles, headphones, and watches must be out of reach—if you’re seen using our phone, your exam may be revoked',
            'Food, drinks, smoking and gum are prohibited',
            'Your desk must be clean. Only a laptop/PC, keyboard, mouse and a transparent water bottle is allowed',
            'If you have any extra screen connected to your laptop or PC, disconnect it',
            'If you have any mirror, TV, or screen in your room, cover it with a sheet',
            'Keep your laptop connected to a charger while the exam is running',
            'Do not click the photo of anything in the exam, including the results'
          ]
        }}
        psText="PS. No need to memorize this!"
        infoText="We’ll send all this information over to you when book with us your WGU IT program"
        buttonText="GET IN TOUCH WITH OUR TEAM NOW"
        buttonUrl="www.google.com"
      />

      </section>
      <section className="flex flex-col items-center justify mt-40">
      <Container1 />
      </section>
      <section className="flex flex-col items-center justify mt-[700px] ">
      <div>
      <LogoSection
        copyrightText="Copyright @ 2023 QuantumEV"
        privacyText="Privacy"
        termsOfUseText="Term Of Use"
        cookiesText="Cookies"
        supportText="Support"
        vectorSrc="/vector-2.svg"
        logoText="LOGO"
        pagesHeading="Pages"
        pagesList={['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']}
        contactHeading="Contact"
        addressText="Address : Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        phoneNumber="(01) 0101-0101-0101"
        emailAddress="info@youremail.org"
        groupSrc="/group-4315.svg"
        descriptionText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        missOutText="Don't miss out!"
        missOutDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        emailPlaceholder="Enter Your Email"
        subscribeButtonText="Subscribe"
      />
    </div>
      </section>


      
    </section>
  );
};

export default Homepage;
