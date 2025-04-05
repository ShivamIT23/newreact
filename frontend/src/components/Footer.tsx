import React from "react";
import Contact_Button from "./Contact_Button";
import NavLink_List from "./NavLink_List";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="h-[783px] min-h-fit bg-[linear-gradient(to_bottom,_#FFFFFF,_#F9F1E3)] w-full pb-20 gap-14">
      <div className="h-[176px] flex items-center justify-between px-[120px] pt-20 pb-6">
        <h2 className="font-semibold text-5xl leading-[72px] ">
          Start a Project?
        </h2>
        <Contact_Button />
      </div>
      <div className="bg-[#3076bb] h-[1px] w-[90%] mx-auto" />
      <div className="px-[120px] pt-16 min-h-[238px] h-fit w-full flex items-center justify-between">
        <section className="mb-auto w-[390px] gap-4 flex flex-col justify-start">
          <h3 className="font-semibold text-[40px] leading-[48px]">
            Support is available 24 hours
          </h3>
          <Contact_Button />
        </section>
        <section className="w-[500px] h-full gap-10 flex  items-start">
          <div className="w-1/2 min-h-fit h-[207px] flex flex-col gap-6">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <ParaSentence>8777838100/ 9800301641</ParaSentence>
              </div>
            </div>
          </div>
          <div className="w-1/2 min-h-fit h-[207px] flex flex-col gap-6">
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <ParaSentence>9903514562/9143253562</ParaSentence>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="px-[101px] pt-16 min-h-[42px] h-fit w-full flex items-center justify-between pb-10">
        <div className="text-xl font-semibold">
          <NavLink_List />
        </div>
        <div className="h-6 w-32 flex items-center justify-between gap-8">
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_176_1275)">
                <path
                  d="M16.5 0H7.5C3.3585 0 0 3.3585 0 7.5V16.5C0 20.6415 3.3585 24 7.5 24H16.5C20.6415 24 24 20.6415 24 16.5V7.5C24 3.3585 20.6415 0 16.5 0ZM21.75 16.5C21.75 19.395 19.395 21.75 16.5 21.75H7.5C4.605 21.75 2.25 19.395 2.25 16.5V7.5C2.25 4.605 4.605 2.25 7.5 2.25H16.5C19.395 2.25 21.75 4.605 21.75 7.5V16.5Z"
                  fill="#3076BB"
                />
                <path
                  d="M12 6C8.6865 6 6 8.6865 6 12C6 15.3135 8.6865 18 12 18C15.3135 18 18 15.3135 18 12C18 8.6865 15.3135 6 12 6ZM12 15.75C9.933 15.75 8.25 14.067 8.25 12C8.25 9.9315 9.933 8.25 12 8.25C14.067 8.25 15.75 9.9315 15.75 12C15.75 14.067 14.067 15.75 12 15.75Z"
                  fill="#3076BB"
                />
                <path
                  d="M18.4499 6.34998C18.8914 6.34998 19.2494 5.99203 19.2494 5.55048C19.2494 5.10892 18.8914 4.75098 18.4499 4.75098C18.0083 4.75098 17.6504 5.10892 17.6504 5.55048C17.6504 5.99203 18.0083 6.34998 18.4499 6.34998Z"
                  fill="#3076BB"
                />
              </g>
              <defs>
                <clipPath id="clip0_176_1275">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_176_1285)">
                <path
                  d="M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z"
                  fill="#3076BB"
                />
              </g>
              <defs>
                <clipPath id="clip0_176_1285">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.46687 1.21875C1.817 1.21875 0.738281 2.30214 0.738281 3.7261C0.738281 5.11862 1.78487 6.23291 3.40356 6.23291H3.43488C5.11702 6.23291 6.16388 5.11862 6.16388 3.7261C6.13243 2.30214 5.11702 1.21875 3.46687 1.21875Z"
                fill="#3076BB"
              />
              <path
                d="M1.02344 8.21387H5.84671V22.7249H1.02344V8.21387Z"
                fill="#3076BB"
              />
              <path
                d="M17.6858 7.87305C15.0838 7.87305 13.339 10.3181 13.339 10.3181V8.21362H8.51562V22.7246H13.3388V14.6211C13.3388 14.1873 13.3702 13.7542 13.4977 13.4439C13.8463 12.5777 14.6398 11.6802 15.9723 11.6802C17.7176 11.6802 18.4157 13.0109 18.4157 14.9617V22.7246H23.2386V14.4043C23.2386 9.94713 20.8589 7.87305 17.6858 7.87305Z"
                fill="#3076BB"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="bg-[#3076bb] h-[1px] w-[90%] mx-auto" />
      <div className="px-[120px] pt-16 min-h-[22px] h-fit w-full flex items-center justify-between">
        <div className="w-[292px] h-full poppins font-normal text-[16px] leading-5 flex items-center gap-2">
          <p className="w-4 text-[20px]">©</p>
          <p className="w-[97px]">Copywriting</p>
          <p>|</p>
          <p>All Rights Reserved</p>
        </div>
        <div className="h-full w-[182px] poppins font-normal text-[16px] leading-5 flex items-center gap-2">
          <p className="w-[103px]">Terms of Use</p>
          <p className="w-[5px]">|</p>
          <p className="w-[58px]">Privacy</p>
        </div>
      </div>
    </footer>
  );
}

function ParaHeading({ children }: { children: React.ReactNode }) {
  return <h4 className=" font-bold text-[18px]">{children}</h4>;
}

function ParaSentence({ children }: { children: React.ReactNode }) {
  return <p className="font-light text-[18px] flex">{children}</p>;
}
