export default {
  name: "pageAPropos",
  title: "Page À propos",
  type: "document",
  fields: [
    {
      name: "heroTitre",
      title: "Hero — Titre",
      type: "string",
      initialValue: "Derrière Dermaglow",
    },
    {
      name: "heroSousTitre",
      title: "Hero — Sous-titre",
      type: "text",
      rows: 2,
      initialValue: "Esthéticienne certifiée à Chambly, je crée des soins sur mesure qui révèlent votre éclat naturel avec douceur et précision.",
    },
    {
      name: "bioImage",
      title: "Bio — Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bioTexte1",
      title: "Bio — Paragraphe 1",
      type: "text",
      rows: 4,
      initialValue: "Un endroit chaleureux, apaisant et professionnel, pensé pour vous offrir un vrai moment de détente tout en prenant soin de votre peau.",
    },
    {
      name: "bioTexte2",
      title: "Bio — Paragraphe 2",
      type: "text",
      rows: 4,
      initialValue: "Passionnée par les soins de la peau, j'ai choisi de me certifier en soins du visage et peeling pour vous offrir des traitements efficaces, sécuritaires et adaptés à vos besoins.",
    },
    {
      name: "pourQui",
      title: "Pour qui — Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "titre", title: "Titre", type: "string" },
            { name: "texte", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "titre" } },
        },
      ],
    },
    {
      name: "approchePilliers",
      title: "Mon approche — Piliers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Numéro (ex: 01)", type: "string" },
            { name: "titre", title: "Titre", type: "string" },
            { name: "texte", title: "Description", type: "text", rows: 3 },
          ],
          preview: { select: { title: "titre", subtitle: "label" } },
        },
      ],
    },
    {
      name: "pourquoiTexte",
      title: "Pourquoi me choisir — Texte",
      type: "text",
      rows: 4,
      initialValue: "Parce que chaque peau est unique. Je prends le temps de vous écouter, de comprendre vos besoins et de vous accompagner dans votre parcours beauté avec sérieux et bienveillance.",
    },
  ],
  preview: {
    prepare() {
      return { title: "Page À propos" };
    },
  },
};
