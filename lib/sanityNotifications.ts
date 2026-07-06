import { createClient } from "@sanity/client";

export type CounsellingNotification = {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  dateLabel?: string;
  startLabel?: string;
  endLabel?: string;
  linkLabel?: string;
  linkUrl?: string;
  variant?: "notice" | "schedule" | "urgent";
};

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

const counsellingNotificationsQuery = `*[
  _type == "counsellingNotification" &&
  isActive == true
] | order(priority asc, _updatedAt desc)[0...3] {
  "id": _id,
  title,
  subtitle,
  category,
  dateLabel,
  startLabel,
  endLabel,
  linkLabel,
  linkUrl,
  variant
}`;

export async function getCounsellingNotifications() {
  if (!client) {
    return [];
  }

  try {
    return await client.fetch<CounsellingNotification[]>(
      counsellingNotificationsQuery,
      {},
      { next: { revalidate: 300 } },
    );
  } catch {
    return [];
  }
}
