import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "dermaglow",
  title: "Dermaglow by Hanane",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "your-project-id",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Contenu")
          .items([
            S.listItem()
              .title("Page d'accueil")
              .child(S.document().schemaType("pageAccueil").documentId("pageAccueil")),
            S.listItem()
              .title("Page À propos")
              .child(S.document().schemaType("pageAPropos").documentId("pageAPropos")),
            S.divider(),
            S.documentTypeListItem("service").title("Soins"),
            S.documentTypeListItem("temoignage").title("Témoignages"),
            S.documentTypeListItem("faq").title("FAQ"),
            S.divider(),
            S.listItem()
              .title("Paramètres du site")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
