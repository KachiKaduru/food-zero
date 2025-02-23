import Container from "@/app/_components/Container";
import Heading from "@/app/_components/Heading";
import NavigationBar from "@/app/_components/NavigationBar";
import Subtext from "@/app/_components/Subtext";
import { blogsData } from "@/app/_lib/placeholderData";

export default async function SingleBlogPage({ params }) {
  const { blogId } = await params;
  const post = blogsData.filter((blog) => blog.id === blogId).at(0);
  const { title, content, image, author_name, likes, category, tags } = post;
  // console.log(content.sections[0].introduction);
  // console.log(content.sections);

  return (
    <section className="bg-accent-100">
      <NavigationBar />

      <Container className="bg-accent-50 py-32">
        <div>
          <Heading type="h2">{title}</Heading>
          <Heading type="h6">By : {author_name}</Heading>
        </div>

        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-full h-96"
        />

        {content.sections.map((content, i) => (
          <SectionContent key={i} content={content} />
        ))}
      </Container>
    </section>
  );
}

function SectionContent({ content }) {
  return (
    <div className="flex flex-col gap-6">
      {content.introduction && <Subtext>{content.introduction}</Subtext>}

      {content.heading && <Heading type="h4">{content.heading}</Heading>}
      {content.content && <Subtext>{content.content}</Subtext>}

      {content.list && (
        <ul>
          {content.list.map((p, i) => (
            <li key={i}>
              <Subtext>
                {" "}
                {i + 1}: {p}
              </Subtext>
            </li>
          ))}
        </ul>
      )}

      {content.conclusion && <Subtext>{content.conclusion}</Subtext>}
    </div>
  );
}
