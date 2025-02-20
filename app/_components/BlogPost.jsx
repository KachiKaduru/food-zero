import Image from "next/image";
import Heading from "./Heading";
import Subtext from "./Subtext";
import { formatDate } from "../_lib/data-service";

export default function BlogPost({ post }) {
  const { created_at, author_name, content, title, image } = post;

  return (
    <div className="grid grid-cols-2">
      <div className="relative h-full w-full">
        <img src={image} alt="post image" referrerPolicy="no-referrer" className="w-full h-full" />
      </div>

      <div className="flex flex-col">
        <div className="flex gap-5">
          <p>{author_name}</p>
          <p>{formatDate(created_at)}</p>
          <p>2 comments</p>
        </div>
        <Heading type="h4">{title}</Heading>
        <hr className="my-4 h-[2px]" />
        <Subtext>{content}</Subtext>
      </div>
    </div>
  );
}
