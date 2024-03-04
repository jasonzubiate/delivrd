import LabelForm from "./LabelForm";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row justify-between w-full py-40 px-4 md:px-6 gap-24 lg:gap-0"
    >
      <div className="flex flex-col w-full lg:w-[45%] gap-16 lg:gap-24">
        <h2 className="uppercase font-medium leading-[90%] tracking-tight ">
          <div className="mask">
            <span className="block">Want To Be</span>
          </div>
          <div className="mask">
            <span className="block">Featured?</span>
          </div>
        </h2>
        <p>
          We want to feature you just as much as you&apos;d like to be featured.
          Submit your label and share this page with others. Cheers!
        </p>
      </div>
      <LabelForm />
    </section>
  );
}
