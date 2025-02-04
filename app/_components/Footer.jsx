import Container from "@/app/_components/Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h2>Food Zero</h2>
        </div>
      </Container>
      <div className="w-full h-[2px] border-dashed border-accent-300"></div>
      <Container>
        <p>&copy; 2025 Zero Inc. All rights Reserved</p>
      </Container>
    </footer>
  );
}
