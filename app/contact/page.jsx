import Header from "@/app/_components/Header";
import headerImg from "@/public/images/contact-header.jpeg";
import Heading from "../_components/Heading";

export const metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <div>
      <Header img={headerImg}>
        <div>
          <Heading type="hero" className="mb-12">
            Get in touch
          </Heading>
          <Heading type="h5">The freshest ingredients for you every day</Heading>
        </div>
      </Header>

      <h2>Contact page</h2>
    </div>
  );
}
