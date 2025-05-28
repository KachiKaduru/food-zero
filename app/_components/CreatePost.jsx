"use client";

import { useState } from "react";
import { createPost } from "../_lib/actions";

export default function CreatePost() {
  const [sections, setSections] = useState([{ text: "" }]);
  const [tags, setTags] = useState([]);
  const [imageFile, setImageFile] = useState("");

  // Add a new section (max 300 chars)
  const addSection = () => setSections([...sections, { text: "" }]);

  // Remove a section
  const removeSection = (index) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  return (
    <form
      action={createPost}
      onSubmit={() => console.log(sections)}
      className="flex flex-col gap-4 p-4"
    >
      <input
        name="title"
        placeholder="Title"
        className="p-2 border rounded"
        required
        defaultValue={"lalalal"}
      />

      {sections.map(({ text }, index) => (
        <div key={index} className="flex gap-2">
          <textarea
            name="section"
            required
            value={text}
            onChange={(e) => {
              const newSections = [...sections];

              newSections[index].text = e.target.value.slice(0, 300); // Limit to 300 chars
              setSections(newSections);
            }}
            placeholder={`Section ${index + 1}`}
            className="p-2 border rounded w-full"
          />
          <p> {300 - 2} characters left</p>
          {sections.length > 1 && (
            <button
              type="button"
              onClick={() => removeSection(index)}
              className="p-2 bg-red-500 text-white rounded"
            >
              ✕
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addSection} className="p-2 bg-gray-300 rounded">
        + Add Section
      </button>

      <input
        type="file"
        name="image"
        accept="image/*"
        // value={imageFile}
        // // onChange={(e) => setImageFile(e.target.value)}
      />

      <input
        name="tags"
        type="text"
        placeholder="Enter tags (comma-separated, max 3)"
        className="p-2 border rounded"
        value={tags.join(", ")}
        onChange={(e) =>
          setTags(
            e.target.value
              .split(",")
              .map((tag) => tag.trim())
              .slice(0, 3)
          )
        }
      />

      <input type="hidden" name="content" value={JSON.stringify(sections)} />

      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Create Post
      </button>
    </form>
  );
}
