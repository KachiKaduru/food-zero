import { lato } from "../_fonts/fonts";
import Container from "@/app/_components/Container";
import Heading from "./Heading";
import Button from "./Button";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h2>Food Zero</h2>
        </div>

        <div>
          <Heading type="h5">Contact</Heading>

          <p className={`flex flex-col ${lato.className}`}>
            <span>+1+86 852 346 000</span> <span>info@foodzero.com</span>
          </p>

          <p className={`flex flex-col ${lato.className}`}>
            <span>1959 Sepulveda Blvd.</span> <span>Culver City, CA, 90230</span>
          </p>
        </div>

        <Subscribe />
      </Container>
      <div className="w-full h-[2px]  border border-dashed border-accent-300"></div>
      <Container className={`${lato.className}`}>
        <p>&copy; 2025 Zero Inc. All rights Reserved</p>
      </Container>
    </footer>
  );
}

function Subscribe() {
  return (
    <div>
      <Heading type="h5">Never Miss a Recipe</Heading>

      <form action="" className="w-full flex gap-7">
        <input type="text" placeholder="Email address" className={`${lato.className}`} />
        <Button>Subscribe</Button>
      </form>
    </div>
  );
}
