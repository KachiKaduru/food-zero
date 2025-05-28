import Image from "next/image";
import Heading from "./Heading";
import Subtext from "./Subtext";
import { formatDate } from "../_lib/data-service";
import Link from "next/link";

export default function BlogPost({ post }) {
  const { id, created_at, author_name, content, title, image } = post;
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

  return (
    <div className="grid grid-cols-2 gap-10">
      <div
        className={`relative h-full w-full`}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <img src={image} alt="post image" className="object-cover" /> */}
      </div>

      <div className="flex flex-col gap-2 py-8">
        <div className="flex gap-5">
          <p>{author_name}</p>
          <p>{formatDate(created_at)}</p>
          <p>2 comments</p>
        </div>
        <Heading type="h4">{title}</Heading>
        <hr className="my-4 h-[2px]" />
        <Subtext>{content}</Subtext>

        <Link href={`/blogs/${id}`}>
          <Heading type="h6">Read more &rarr;</Heading>
        </Link>
      </div>
    </div>
  );
}
