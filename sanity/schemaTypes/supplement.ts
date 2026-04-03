const supplement = {
  name: "supplementReview",
  title: "Supplement Review",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "rating", title: "Rating", type: "number" },
    { name: "content", title: "Content", type: "text" },
    { name: "pros", title: "Pros", type: "array", of: [{ type: "string" }] },
    { name: "cons", title: "Cons", type: "array", of: [{ type: "string" }] },
  ],
};

export default supplement;