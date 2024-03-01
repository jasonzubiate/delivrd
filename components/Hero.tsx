export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col px-4 md:px-6 pt-24 md:pt-48 pb-32"
    >
      <div className="flex flex-col gap-3">
        <h1 className="uppercase font-semibold leading-[85%] tracking-tighter">
          <span className="block">One Submission</span>
          <span className="block">From Discovery</span>
        </h1>
        <div className="bg-ashen-taupe w-full h-[600px]"></div>
      </div>
    </section>
  );
}
