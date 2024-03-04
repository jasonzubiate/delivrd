import LabelCardList from "./LabelCardList";

export default function Labels() {
  return (
    <section id="labels" className="pt-24">
      <h2 className="font-medium uppercase text-lg md:text-2xl px-4 md:px-6 mb-8">
        Featured Labels
      </h2>
      <LabelCardList />
    </section>
  );
}
