export default {
  name: "temoignage",
  title: "Témoignage",
  type: "document",
  fields: [
    {
      name: "nom",
      title: "Nom de la cliente",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "texte",
      title: "Témoignage",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "soin",
      title: "Soin concerné",
      type: "string",
      description: "Ex: Soin de visage facial, Peeling",
    },
    {
      name: "note",
      title: "Note (1-5)",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: "visible",
      title: "Visible sur le site",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: { title: "nom", subtitle: "soin" },
  },
};
