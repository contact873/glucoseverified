export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "email",
      type: "string",
      title: "Email"
    },
    {
      name: "password",
      type: "string",
      title: "Password"
    },
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "diabetesType",
      type: "string",
      title: "Diabetes Type"
    },
    {
      name: "createdAt",
      type: "datetime"
    }
  ]
};