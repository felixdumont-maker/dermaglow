export default {
  name: "service",
  title: "Service",
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
      name: "numero",
      title: "Numéro (ex: 01)",
      type: "string",
      initialValue: "01",
    },
    {
      name: "eyebrow",
      title: "Étiquette (ex: Soin signature)",
      type: "string",
    },
    {
      name: "titre",
      title: "Titre du service",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description complète",
      type: "text",
      rows: 5,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "inclus",
      title: "Ce qui est inclus",
      type: "array",
      of: [{ type: "string" }],
      description: "Liste des éléments inclus dans le soin",
    },
    {
      name: "variations",
      title: "Formules et tarifs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "nom", title: "Nom de la formule", type: "string" },
            { name: "duree", title: "Durée (ex: 75 min)", type: "string" },
            { name: "prix", title: "Prix (ex: 95 $)", type: "string" },
            { name: "detail", title: "Description courte", type: "text", rows: 2 },
            { name: "vedette", title: "Formule populaire", type: "boolean", initialValue: false },
          ],
          preview: {
            select: { title: "nom", subtitle: "prix" },
          },
        },
      ],
    },
    {
      name: "featured",
      title: "Soin mis en avant sur l'accueil",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: { title: "titre", subtitle: "eyebrow", media: "image" },
  },
};
