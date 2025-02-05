import headerImg from "@/public/images/contact-header.jpeg";
import Header from "@/app/_components/Header";
import Heading from "@/app/_components/Heading";
import ReservationForm from "@/app/_components/ReservationForm";
import Container from "../_components/Container";
import Button from "../_components/Button";
import Image from "next/image";

import contactImgOne from "@/public/images/contact/contact-img-one.jpeg";
import contactImgTwo from "@/public/images/contact/contact-img-two.jpeg";
import { Orange } from "../_lib/icons";
import ScrollEffectComponent from "../_components/ScrollEffectComponent";

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

      <ScrollEffectComponent>
        <div className="pt-52 pb-40">
          <Container className="grid gap-28">
            <section className="grid grid-cols-2 gap-14">
              {/*  */}
              <div className="relative aspect-[3/2]">
                <Orange className="absolute -top-36 -right-[45%]" />
                <Image
                  src={contactImgOne}
                  fill
                  alt="Dinner image"
                  className="object-cover object-center"
                />
              </div>

              <Heading type="h5" className="place-self-end w-[60%] mx-auto">
                We can be contacted via email{" "}
                <span className="text-primary-200">info@foodzero.com</span> or telephone on{" "}
                <span className="text-primary-200">+86 852 346 000</span>
              </Heading>
            </section>

            <section className="grid grid-cols-2 gap-14">
              <div className="place-self-center">
                <Heading type="h5" className="mb-12 pr-20">
                  We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
                </Heading>
                <Button className="bg-accent-50 text-accent-300 border-2 border-accent-300">
                  View in Maps
                </Button>
              </div>

              <div className="relative aspect-[4/5]">
                <Image src={contactImgTwo} alt="Location Image" fill className="object-cover" />
              </div>
              {/*  */}
            </section>
          </Container>
        </div>
      </ScrollEffectComponent>

      <ReservationForm />
    </div>
  );
}
