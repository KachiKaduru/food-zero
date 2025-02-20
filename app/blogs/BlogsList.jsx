import BlogPost from "../_components/BlogPost";
import Container from "../_components/Container";
import { blogsData } from "../_lib/placeholderData";

export default function BlogsList() {
  return (
    <section className="py-32">
      <Container className="grid gap-12">
        {blogsData.map((post, i) => (
          <BlogPost key={i} post={post} />
        ))}
      </Container>
    </section>
  );
}
