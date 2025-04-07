import { Link } from "react-router-dom";

export default function PageShower({
  children,
}: {
  children: string | React.ReactNode;
}) {
  return (
    <div className="w-full pl-[5vw] absolute top-4 left-2">
      <div className="w-[20vw] md:w-fit md:min-w-48 h-6 flex absolute text-sm font-normal sm:text-lg items-center gap-4">
      <Link to="/" className="w-14 h-6 ">
        HOME
      </Link>
      <div>
        <svg
          width="23"
          height="9"
          viewBox="0 0 23 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9224 0.339048C16.1611 -0.0136881 16.6405 -0.106127 16.9933 0.132579L22.3243 3.74027C22.5768 3.86698 22.75 4.12821 22.75 4.4299C22.75 4.62502 22.6775 4.80321 22.5581 4.93903C22.5096 5.00105 22.4508 5.05665 22.3822 5.10312L16.9933 8.74994C16.6405 8.98865 16.1611 8.89621 15.9224 8.54347C15.6837 8.19074 15.7761 7.71128 16.1288 7.47257L19.4854 5.20109H0.771186C0.345272 5.20109 0 4.85582 0 4.4299C0 4.00399 0.345272 3.65872 0.771187 3.65872H19.4518L16.1288 1.40995C15.7761 1.17124 15.6837 0.691784 15.9224 0.339048Z"
            fill="#3076BB"
          />
        </svg>
      </div>
      <p className="md:min-w-20 md:whitespace-nowrap h-6 flex items-center">
        {typeof children === "string" ? children.toUpperCase() : children}
      </p>
    </div>
    </div>
    
  );
}
