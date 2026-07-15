import { createClient } from "@sanity/client";
import type { CareerOpening } from "@/data/careers";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

const client =
  projectId && dataset
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-06-01",
        useCdn: true,
      })
    : null;

const careersQuery = `*[
  _type == "careerPosting" &&
  isActive == true
] | order(priority asc, _updatedAt desc) {
  "id": _id,
  title,
  department,
  location,
  employmentType,
  "imageUrl": image.asset->url,
  imageAlt,
  summary,
  responsibilities,
  requirements,
  applyLabel
}`;

export async function getCareerPostingsFromSanity() {
  if (!client) {
    return [];
  }

  try {
    return await client.fetch<CareerOpening[]>(careersQuery, {}, { next: { revalidate: 300 } });
  } catch {
    return [];
  }
}
