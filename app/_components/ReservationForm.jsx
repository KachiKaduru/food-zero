import { lato } from "../_fonts/fonts";
import { MintLeaf } from "../_lib/icons";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";
import ScrollEffectComponent from "./ScrollEffectComponent";
import Subtext from "./Subtext";

export default function ReservationForm() {
  return (
    <div className="bg-primary-50 py-40">
      <ScrollEffectComponent>
        <Container className="grid gap-24 relative">
          <MintLeaf className="absolute -top-40 scale-90" />
          <div className="w-fit mx-auto ">
            <Heading type="h1">Make a reservation</Heading>
            <Subtext className="mt-4">Get in touch with the restaurant</Subtext>
          </div>

          <form action="" className="grid gap-11 auto-fill">
            <fieldset>
              <Input type="text" placeholder="First name" name="firstName" className="capitalize" />
            </fieldset>
            <fieldset>
              <Input type="text" placeholder="Last name" name="lastName" className="capitalize" />
            </fieldset>
            <fieldset className="col-span-full">
              <Input type="email" placeholder="Email" name="email" />
            </fieldset>
            <fieldset className="col-span-full">
              <Input type="tel" placeholder="Phone number" name="phoneNumber" />
            </fieldset>
            <fieldset>
              <Input type="date" name="date" />
            </fieldset>
            <fieldset>
              <Input type="time" name="time" />
            </fieldset>
            <fieldset className="col-span-full">
              <select
                name="numGuests"
                className={`${lato.className} py-5 px-7 text-xl text-accent-300 border-2 border-solid border-accent-300 w-full bg-primary-50`}
              >
                <option value="" key="" disabled>
                  Select number of guests...
                </option>
                {Array.from({ length: 7 }, (_, i) => i + 1 + 1).map((x) => (
                  <option value={x} key={x}>
                    {x} {x === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </fieldset>
            <fieldset className="col-span-full place-self-center">
              <Button type="large" className="bg-primary-200 text-accent-50 hover:bg-primary-300">
                Book Now
              </Button>
            </fieldset>
          </form>
        </Container>
      </ScrollEffectComponent>
    </div>
  );
}
