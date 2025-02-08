import Heading from "./Heading";

export default function HomeHeader() {
  return (
    <main>
      <div>
        <Heading type="hero" className="text-accent-50">
          Healthy Eating is important part of lifestyle
        </Heading>
      </div>

      <div className="grid grid-cols-[0.6fr_0.4fr]">
        <div className="flex-col"></div>
        <div className="flex-col"></div>
      </div>
    </main>
  );
}
