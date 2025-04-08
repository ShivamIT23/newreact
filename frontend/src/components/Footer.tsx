import React from "react";
import Contact_Button from "./Contact_Button";
import NavLink_List from "./NavLink_List";
import Title_With_Contact from "./Title_With_Contact";
import Footer_Link from "./Footer_Link";

export default function Footer() {
  return (
    <footer className="h-[783px] min-h-fit h-fit bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] w-full max-w-[100vw] pb-20 gap-14">
      <div className="w-full px-[5vw]">
        <Title_With_Contact title="Start a Project?" />
      </div>
      <div className="bg-[#3076bb] h-[1px] w-[90vw] mx-auto" />
      <div className="px-6 sm:px-16 md:px-[5vw] pt-16 min-h-[238px] h-fit w-full flex flex-col lg:flex-row items-center justify-between">
        <section className="mb-8 lg:mb-auto md:w-[390px] min-h-fit gap-4 flex flex-col items-center md:items-start justify-start">
          <h3 className="font-semibold text-xl md:text-3xl lg:text-[40px] lg:text-start text-center leading-7 lg:leading-[48px]">
            Support is available 24 hours
          </h3>
          <div className="w-full flex lg:block justify-center">
            <Contact_Button />
          </div>
        </section>
        <section className="w-full md:w-[500px] md:min-w-fit overflow-hidden h-full pr-6 gap-6 lg:gap-10 md:flex  items-start">
          <div className="md:w-1/2 pb-10 md:pb-0 min-h-fit min-w-fit h-[207px] flex flex-col gap-6">
            <div className="flex flex-col gap-2 space-y-2">
              <ParaHeading>Office Address</ParaHeading>
              <ParaSentence>D15, Baishnabghata Patuli Township,</ParaSentence>
              <ParaSentence>Kolkata : 700094</ParaSentence>
            </div>
            <div className="flex flex-col gap-2 space-y-2">
              <ParaHeading>
                Manik Chand Patra
                <ParaSentence> &#40;Senior Supervisor &#41;</ParaSentence>
              </ParaHeading>
              <div className="flex items-center">
                <svg
                  width="13.5"
                  height="13.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.12685 2.19291C5.89905 1.62343 5.34749 1.25 4.73413 1.25H2.67105C1.88623 1.25 1.25 1.88607 1.25 2.6709C1.25 9.34192 6.65808 14.75 13.3291 14.75C14.1139 14.75 14.75 14.1137 14.75 13.3289L14.7503 11.2655C14.7503 10.6521 14.377 10.1006 13.8075 9.87285L11.8302 9.0822C11.3186 8.87758 10.7362 8.96967 10.313 9.32239L9.80264 9.74801C9.20665 10.2447 8.32972 10.2052 7.78115 9.65659L6.34417 8.21829C5.79559 7.66972 5.75505 6.7935 6.25171 6.19751L6.67725 5.68722C7.02996 5.26397 7.12287 4.68137 6.91825 4.16982L6.12685 2.19291Z"
                    stroke="#3076BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <ParaSentence>8777838100/ 9800301641</ParaSentence>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 min-h-fit min-w-fit h-[207px] flex flex-col gap-6">
            <div className="flex flex-col gap-2 space-y-2">
              <ParaHeading>Factory Address</ParaHeading>
              <ParaSentence>
                Mohan Ghosh Road, Mouza - Ramchaandrapur
              </ParaSentence>
              <ParaSentence>Kolkata : 700103,</ParaSentence>
              <ParaSentence>Near Happy Homes complex</ParaSentence>
            </div>
            <div className="flex flex-col gap-2 space-y-2">
              <ParaHeading>
                Debasish Dutta<ParaSentence> &#40;Director&#41;</ParaSentence>
              </ParaHeading>
              <div className="flex items-center">
                <svg
                  width="13.5"
                  height="13.5"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.12685 2.19291C5.89905 1.62343 5.34749 1.25 4.73413 1.25H2.67105C1.88623 1.25 1.25 1.88607 1.25 2.6709C1.25 9.34192 6.65808 14.75 13.3291 14.75C14.1139 14.75 14.75 14.1137 14.75 13.3289L14.7503 11.2655C14.7503 10.6521 14.377 10.1006 13.8075 9.87285L11.8302 9.0822C11.3186 8.87758 10.7362 8.96967 10.313 9.32239L9.80264 9.74801C9.20665 10.2447 8.32972 10.2052 7.78115 9.65659L6.34417 8.21829C5.79559 7.66972 5.75505 6.7935 6.25171 6.19751L6.67725 5.68722C7.02996 5.26397 7.12287 4.68137 6.91825 4.16982L6.12685 2.19291Z"
                    stroke="#3076BB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <ParaSentence>9903514562/9143253562</ParaSentence>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-10 md:px-[5vw] pt-16 min-h-[42px] h-fit w-full flex gap-8 lg:gap-2 flex-col lg:flex-row items-center justify-between pb-10">
        <div className="text-sm lg:text-xl font-semibold hidden sm:block">
          <NavLink_List />
        </div>
        <Footer_Link />
      </div>
      <div className="bg-[#3076bb] h-[1px] w-[90%] mx-auto" />
      <div className="px-10 md:px-[5vw] pt-16 min-h-[22px] h-fit w-full flex flex-col md:flex-row items-center  gap-6 md:gap-2 justify-between">
        <div className="md:w-[292px] h-full poppins font-normal text-[16px] leading-5 flex items-center justify-center gap-2">
          <p className="w-4 text-[20px]">©</p>
          <p className="w-[97px]">Copywriting</p>
          <p>|</p>
          <p className="hidden sm:block">All Rights Reserved</p>
        </div>
        <div className="h-full sm:w-[182px] poppins font-normal text-[16px] leading-5 flex items-center gap-2">
          <p className="w-[103px]">Terms of Use</p>
          <p className="w-[5px]">|</p>
          <p className="w-[58px]">Privacy</p>
        </div>
      </div>
    </footer>
  );
}

function ParaHeading({ children }: { children: React.ReactNode }) {
  return <h4 className=" font-bold text-[16px] lg:text-lg">{children}</h4>;
}

function ParaSentence({ children }: { children: React.ReactNode }) {
  return (
    <p className="overflow-hidden whitespace-nowrap font-light text-sm lg:text-lg flex">
      {children}
    </p>
  );
}
