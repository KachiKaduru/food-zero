import Container from "./Container";
import Heading from "./Heading";
import Subtext from "./Subtext";

export default function HomeMenuSection() {
  return (
    <section className="bg-accent-50 pt-44 pb-52">
      <Container>
        <div className="mb-36">
          <Heading type="h1">Our menu</Heading>
          <Subtext>This is a section of your menu. Give your section a brief description</Subtext>
        </div>

        <div>
          <div>
            <Heading type="h4" className="border-b border-accent-300 border-dashed text-right p-3">
              $20
            </Heading>
            <Heading type="h3"> Lorem ipsum dolor sit amet.</Heading>
            <Subtext>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Subtext>
          </div>
        </div>
      </Container>
    </section>
  );
}
