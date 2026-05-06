export default {
  name: "pageAccueil",
  title: "Page d'accueil",
  type: "document",
  fields: [
    {
      name: "heroTitre",
      title: "Hero — Titre principal",
      type: "string",
      initialValue: "Révélez votre éclat naturel",
    },
    {
      name: "heroSousTitre",
      title: "Hero — Sous-titre",
      type: "text",
      rows: 2,
      initialValue: "Des soins sur mesure conçus pour sublimer votre peau avec douceur, expertise et intention.",
    },
    {
      name: "approcheImage",
      title: "Section Approche — Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "approcheTitre",
      title: "Section Approche — Titre",
      type: "string",
      initialValue: "La peau mérite une attention singulière",
    },
    {
      name: "approcheTexte1",
      title: "Section Approche — Paragraphe 1",
      type: "text",
      rows: 3,
      initialValue: "Chez Dermaglow by Hanane, chaque soin commence par une analyse approfondie. La beauté véritable naît d'un équilibre entre science et douceur.",
    },
    {
      name: "approcheTexte2",
      title: "Section Approche — Paragraphe 2",
      type: "text",
      rows: 3,
      initialValue: "Avec des produits soigneusement sélectionnés et des techniques éprouvées, je vous accompagne vers une peau plus saine, lumineuse et en harmonie avec vous.",
    },
  ],
  preview: {
    prepare() {
      return { title: "Page d'accueil" };
    },
  },
};
