import { featuresData } from "../_lib/placeholderData";
import Container from "./Container";
import Heading from "./Heading";
import ScrollEffectComponent from "./ScrollEffectComponent";
import Subtext from "./Subtext";

export default function HomeFeatures() {
  return (
    <section className="pt-40 pb-36 bg-accent-50">
      <ScrollEffectComponent>
        <Container className="grid grid-cols-3">
          {featuresData.map((data, i) => (
            <FeatureItem item={data} key={i} />
          ))}
        </Container>
      </ScrollEffectComponent>
    </section>
  );
}

function FeatureItem({ item }) {
  const { icon, title, description } = item;
  return (
    <div className="grid gap-10 justify-items-center">
      <div className="w-52 h-52 rounded-full bg-primary-50 grid place-content-center">{icon}</div>
      <Heading type="h4">{title}</Heading>
      <Subtext className="text-center">{description}</Subtext>
    </div>
  );
}
