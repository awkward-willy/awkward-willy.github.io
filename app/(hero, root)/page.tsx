import ContactLinks from "../../components/ContactLinks";

export default function HeroPage() {
  return (
    <section className="flex flex-col items-center justify-center h-full text-left">
      <p className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-2xl leading-snug w-[90%]">
        Hello there! 👋 I&apos;m
      </p>
      <h1 className="text-3xl font-extrabold sm:text-4xl md:text-6xl lg:text-7xl leading-snug w-[90%] m-4 after:content-[''] after:block after:w-28 sm:after:h-3 after:h-1 after:bg-blue-400">
        Willy Awkward
      </h1>
      <h1 className="text-xl font-extrabold  sm:text-2xl md:text-4xl lg:text-2xl leading-snug w-[90%] m-4">
        Currently a student majoring in{" "}
        <span className="text-blue-500">CSIE</span>
      </h1>
      <ContactLinks className="w-[90%] m-4" />
    </section>
  );
}
