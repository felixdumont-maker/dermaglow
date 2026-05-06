export default {
  name: "faq",
  title: "FAQ",
  type: "document",
  orderings: [
    { title: "Ordre d'affichage", by: [{ field: "ordre", direction: "asc" }] },
  ],
  fields: [
    {
      name: "ordre",
      title: "Ordre d'affichage",
      type: "number",
      initialValue: 1,
    },
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "reponse",
      title: "Réponse",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "visible",
      title: "Visible sur le site",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: { title: "question" },
  },
};
