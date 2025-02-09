import ReservationMini from "../_components/ReservationMini";
import MenuHeader from "./MenuHeader";
import MenuCategory from "./MenuCategory";
import { categoryData } from "../_lib/placeholderData";
import Container from "../_components/Container";

export const metadata = {
  title: "Our Menu",
};

export default function MenuPage() {
  return (
    <>
      <MenuHeader />
      <Container>
        {categoryData.map((category, i) => (
          <MenuCategory key={i} item={category} />
        ))}
      </Container>
      <ReservationMini />
    </>
  );
}
