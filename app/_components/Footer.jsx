import { lato } from "@/app/_fonts/fonts";
import Container from "@/app/_components/Container";
import Heading from "./Heading";
import Button from "./Button";
import Subtext from "./Subtext";
// import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-primary-300 text-accent-50">
      <Container className="grid gap-4 md:grid-cols-[0.2fr_0.3fr_0.5fr] py-10 md:py-[100px]">
        <div>
          <Heading type="h2">Food Zero.</Heading>
        </div>

        <div className="grid grid-cols-2">
          <Heading type="h5" className="mb-2 md:mb-8 col-span-2">
            Contact
          </Heading>

          <p className={`flex flex-col ${lato.className} text-sm mb-3 md:mb-7`}>
            <span>+1+86 852 346 000</span> <span>info@foodzero.com</span>
          </p>

          <p className={`flex flex-col ${lato.className} text-sm`}>
            <span>1959 Sepulveda Blvd.</span> <span>Culver City, CA, 90230</span>
          </p>
        </div>

        <Subscribe />
      </Container>

      <div className="w-full h-[2px] border border-dashed border-accent-50"></div>

      <Container className={`${lato.className} py-[50px]`}>
        <Subtext>&copy; 2025 Zero Inc. All rights Reserved</Subtext>
        <div>{/* <IoLogoInstagram /> */}</div>
      </Container>
    </footer>
  );
}

function Subscribe() {
  return (
    <div>
      <Heading type="h5" className="mb-2 md:mb-8">
        Never Miss a Recipe
      </Heading>

      <form action="" className="w-full flex flex-col md:flex-row gap-7">
        <input
          type="text"
          placeholder="Email address"
          className={`${lato.className} border-2 border-accent-50 bg-primary-300 text-accent-50 py-3 px-4 sm:px-7 w-full`}
        />
        <Button className="bg-primary-200 text-accent-50 w-fit mx-auto md:m-0 md:w-full">
          Subscribe
        </Button>
      </form>
      <p className={`${lato.className} text-xs text-accent-50 mt-4 md:mt-2`}>
        Join our subscribers and get best recipe delivered each week!
      </p>
    </div>
  );
}
