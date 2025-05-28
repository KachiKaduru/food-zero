"use server";

export async function createPost(formData) {
  console.log(formData);

  const content = JSON.parse(formData.get("content"));
  //   console.log(content);

  //   const sections = formData.getAll("section");
  const { title, tags } = Object.fromEntries(formData.entries());
  //   const content = sections.map

  //   console.log(sections, typeof sections);

  const post = {
    title,
    tags,
    content,
  };

  //   console.log(post);
}
