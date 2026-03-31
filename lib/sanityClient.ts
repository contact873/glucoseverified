export default {
  name: "supplement",
  title: "Supplement",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Supplement Name",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "evidence",
      type: "string",
    },
    {
      name: "benefits",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "affiliateLink",
      type: "url",
    },
    {
      name: "category",
      type: "string",
    }
  ]
};