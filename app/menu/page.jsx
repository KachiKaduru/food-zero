import ReservationMini from "../_components/ReservationMini";
import MenuHeader from "./MenuHeader";
import MenuCategory from "./MenuCategory";
import { categoryData } from "../_lib/placeholderData";
import Container from "../_components/Container";
import { Blueberries } from "../_lib/icons";

export const metadata = {
  title: "Our Menu",
};

export default async function MenuPage() {
  return (
    <>
      <MenuHeader />
      <Container className="relative">
        <Blueberries className="absolute top-0 right-0" />
        {categoryData.map((category, i) => (
          <MenuCategory key={i} item={category} />
        ))}
      </Container>
      <ReservationMini />
    </>
  );
}
