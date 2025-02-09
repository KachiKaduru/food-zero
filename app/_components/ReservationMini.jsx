import { lato } from "../_fonts/fonts";
import Button from "./Button";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";
import Subtext from "./Subtext";

export default function ReservationMini() {
  return (
    <section className="pt-44 pb-48 bg-primary-50">
      <Container>
        <div className="w-fit mx-auto mb-24">
          <Heading type="h1">Make a Reservation</Heading>
          <Subtext className="text-center">Get in touch with restaurant</Subtext>
        </div>

        <form action="" className="grid grid-cols-3 gap-10">
          <fieldset>
            <Input type="date" name="date" />
          </fieldset>
          <fieldset>
            <Input type="time" name="time" defaultValue="18:00" />
          </fieldset>
          <fieldset>
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
    </section>
  );
}
