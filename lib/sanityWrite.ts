import { createClient } from "@sanity/client";

export const writeClient = createClient({
  projectId: "1ofyvk3d",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});