import Header from "@/app/_components/Header";
import headerImg from "@/public/images/blog-header.jpeg";
import BlogsList from "./BlogsList";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div>
      <Header img={headerImg} />

      <BlogsList />
    </div>
  );
}
