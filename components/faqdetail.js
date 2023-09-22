import React, { useState } from "react";

function DetailsComponent() {
  const [isOpen, setIsOpen] = useState({});

  const toggleOpen = (index) => {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const questions = [
    {
        summary: "Can a 4-year Bachelor’s really be completed in 6 months? How is that possible?",
        content: "Because of WGU’s competency-based tuition fees, it’s entirely possible—only if one has the expertise to sit and pass all of its exams within 6 months. However, for most people seeking to invest in their higher education, that’s rarely the case. Most professionals and parents who want to gain a university education don’t have the ready expertise to pass all of a Bachelor’s or Masters exams in 6 months. But that’s the very problem we’re here to solve. By having our team of experts sit the exams as proxies for you: you simply enroll, and use our knowledge to pass the exams and gain all your credits. So you don’t need to sacrifice your career or family time to study for years — nor have the looming stress over whether you’ll pass."
    },
    {
        summary: "Can you really sit the exams for me without being detected?",
        content: "Because of WGU’s competency-based tuition fees, it’s entirely possible—only if one has the expertise to sit and pass all of its exams within 6 months. However, for most people seeking to invest in their higher education, that’s rarely the case. Most professionals and parents who want to gain a university education don’t have the ready expertise to pass all of a Bachelor’s or Masters exams in 6 months. But that’s the very problem we’re here to solve. By having our team of experts sit the exams as proxies for you: you simply enroll, and use our knowledge to pass the exams and gain all your credits. So you don’t need to sacrifice your career or family time to study for years — nor have the looming stress over whether you’ll pass."
    },
    {
        summary: "What’s your success ratio? What happens if I fail and need to retake?",
        content: ""
    },
    {
        summary: "I saw your offer for Pay After You Pass. It sounds amazing. Is there any hidden catch?",
        content: ""
    },
    {
        summary: "Apart from WGU’s own flat-fee, what are your costs to sit the exams for me?",
        content: ""
    },
    {
        summary: "Can you tell me more about WGU? How do I enroll with them?",
        content: ""
    },
    {
        summary: "How do you actually sit the exam for me? Do you do this on your own or as a team?",
        content: ""
    },
    {
        summary: "Would I have to sit in front of the screen during the whole exam?",
        content: ""
    },
    {
        summary: "Do you install any software on my computer? How can I ensure you’ll remove it after the exam?",
        content: ""
    }
];


  return (
    <div className="w-full max-w-[1130px] mx-auto p-4">
    {questions.map((question, index) => (
      <div className="w-full mb-4" key={index} onClick={() => toggleOpen(index)}>
        <details open={isOpen[index]} className="rounded-xl bg-white flex flex-col py-5 px-10 items-start justify-start gap-[20px] border-[1px] border-solid border-gainsboro">
          <summary>
            <b className="relative inline-block w-full max-w-[1050px]">
              {question.summary}
            </b>
          </summary>
          <div className="content relative text-base tracking-[-0.02em] leading-[150%] font-poppins text-body-text inline-block w-full max-w-[1050px]">
            {question.content && <>
              <br/>
              {question.content}
            </>}
          </div>
        </details>
      </div>
    
      ))}

      <style jsx>{`
        details[open] summary::-webkit-details-marker, 
        details summary::-webkit-details-marker {
            display: none;
        }

        details > summary {
            list-style-type: none;
            position: relative;
            cursor: pointer; // makes the summary feel more clickable
        }

        details > summary:before {
            content: '';
            display: block;
            position: absolute;
            top: 2%;
            left: 98%;
            width: 24px;
            height: 24px;
            background: url('/frame12.svg') no-repeat;
        }

        details[open] > summary:before {
            transform: rotate(180deg);
            content: '';
            display: block;
            position: absolute;
            top: 2%;
            left: 98%;
            width: 24px;
            height: 24px;
            background: url('/frame11.svg') no-repeat;
        }

        .content {
            overflow: hidden;
            transition: all 0.5s ease-in-out;
        }
        @media (max-width: 640px) { 
          details {
            padding: 2rem 1rem;
          }
          
        }
      `}</style>
    </div>
  );
}

export default DetailsComponent;
