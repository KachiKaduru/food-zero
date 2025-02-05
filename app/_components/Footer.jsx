import { lato } from "@/app/_fonts/fonts";
import Container from "@/app/_components/Container";
import Heading from "./Heading";
import Button from "./Button";
// import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-primary-300 text-accent-50">
      <Container className="grid grid-cols-[0.2fr_0.3fr_0.5fr] py-[100px]">
        <div>
          <Heading type="h2">Food Zero.</Heading>
        </div>

        <div className="">
          <Heading type="h5" className="mb-8">
            Contact
          </Heading>

          <p className={`flex flex-col ${lato.className} text-sm mb-7`}>
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
        <p>&copy; 2025 Zero Inc. All rights Reserved</p>
        <div>{/* <IoLogoInstagram /> */}</div>
      </Container>
    </footer>
  );
}

function Subscribe() {
  return (
    <div>
      <Heading type="h5" className="mb-8">
        Never Miss a Recipe
      </Heading>

      <form action="" className="w-full flex gap-7">
        <input
          type="text"
          placeholder="Email address"
          className={`${lato.className} border-2 border-accent-50 bg-primary-300 text-accent-50 px-7 w-full`}
        />
        <Button className="bg-primary-200 text-accent-50">Subscribe</Button>
      </form>
      <p className={`${lato.className} text-xs text-accent-50 mt-2`}>
        Join our subscribers and get best recipe delivered each week!
      </p>
    </div>
  );
}
