export default {
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    {
      name: "adresse",
      title: "Adresse",
      type: "string",
      initialValue: "670 de Gaspé, Appartement 305, Verdun, Québec H3E 1H8",
    },
    {
      name: "telephone",
      title: "Téléphone",
      type: "string",
    },
    {
      name: "courriel",
      title: "Courriel",
      type: "string",
      initialValue: "dermaglowbyhanane@gmail.com",
    },
    {
      name: "instagram",
      title: "Lien Instagram",
      type: "url",
    },
    {
      name: "facebook",
      title: "Lien Facebook",
      type: "url",
    },
    {
      name: "horaires",
      title: "Horaires d'ouverture",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "jour", title: "Jours", type: "string" },
            { name: "heure", title: "Heures", type: "string" },
          ],
          preview: {
            select: { title: "jour", subtitle: "heure" },
          },
        },
      ],
      initialValue: [
        { jour: "Mardi – Vendredi", heure: "10 h – 18 h" },
        { jour: "Samedi", heure: "9 h – 16 h" },
        { jour: "Dimanche – Lundi", heure: "Fermé" },
      ],
    },
  ],
  preview: {
    prepare() {
      return { title: "Paramètres du site" };
    },
  },
};
