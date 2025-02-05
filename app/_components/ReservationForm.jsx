import { lato } from "../_fonts/fonts";
import Container from "./Container";
import Heading from "./Heading";
import Input from "./Input";

export default function ReservationForm() {
  return (
    <div>
      <Container>
        <div className="w-fit mx-auto">
          <Heading type="h1">Make a reservation</Heading>
          <p className={`${lato.className} text-xl`}>Get in touch with restaurant</p>
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
            <Input type="date" name="firstName" />
          </fieldset>
          <fieldset>
            <Input type="time" name="time" />
          </fieldset>
          <fieldset className="col-span-full">
            <select
              name="numGuests"
              className={`${lato.className} py-6 px-7 text-xl text-accent-300 border-2 border-solid border-accent-300 w-full`}
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
        </form>
      </Container>
    </div>
  );
}
