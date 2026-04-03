const guide = {
  name: "guide",
  title: "Guide",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "content", title: "Content", type: "text" },
  ],
};

export default guide;
