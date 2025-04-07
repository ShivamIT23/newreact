import { subServicesList } from "../lib/content";
import ServiceCard from "./ServiceCard";

export default function Service_Main() {
  return (
    <section className="grid md:grid-cols-3 mt-10 snap-y snap-mandatory gap-y-6 mx-auto">
      {subServicesList.map((service, index: number) => {
        return (
          <div key={index} className="snap-start col-span-1">
            <ServiceCard src={service.image} title={service.title} />
          </div>
        );
      })}
    </section>
  );
}
