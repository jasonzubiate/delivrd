import LabelCardList from "./LabelCardList";

export default function Labels() {
  return (
    <section id="labels" className="mb-14 lg:mb-20">
      <h2 className="font-medium uppercase text-3xl px-2 md:px-6 mb-8">
        Featured Labels
      </h2>
      <LabelCardList />
    </section>
  );
}
