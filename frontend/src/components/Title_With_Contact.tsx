import Contact_Button from "./Contact_Button";

export default function Title_With_Contact({ title }: { title: string }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  py-12 gap-y-6">
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-[72px] font-semibold text-center md:text-left">
        {title}
      </h2>
      <Contact_Button />
    </div>
  );
}
