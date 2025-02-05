import Header from "@/app/_components/Header";
import headerImg from "@/public/images/blog-header.jpeg";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div>
      <Header img={headerImg} />

      <h2>Blog page</h2>
    </div>
  );
}
