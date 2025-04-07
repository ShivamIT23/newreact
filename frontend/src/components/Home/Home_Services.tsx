
import Title_With_Contact from "../Title_With_Contact";
import Service_Main from "../Service_Main";

export default function Home_Services() {
  return (
    <>
      <div className="mt-10 px-[5vw]">
        <Title_With_Contact title="Our Services" />
      </div>
      <section className="my-10 px-[5vw] ">
        <Service_Main />
      </section>
    </>
  );
}
