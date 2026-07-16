import { createClient } from "@sanity/client";
import { activeEbooksQuery, ebookBySlugQuery } from "@/lib/sanity/queries/ebooks";
import type { Ebook } from "@/types/ebook";

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

export function getSearchParamValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function isValidEbookSlug(slug: string | undefined): slug is string {
  return Boolean(slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));
}

export function hasDownloadableMedia(ebook: Ebook | null): ebook is Ebook & {
  mediaFileUrl: string;
} {
  return Boolean(ebook?.mediaFileUrl);
}

export async function getActiveEbooks() {
  if (!client) {
    return [];
  }

  try {
    return await client.fetch<Ebook[]>(activeEbooksQuery, {}, { next: { revalidate: 300 } });
  } catch {
    return [];
  }
}

export async function getEbookBySlug(slug: string) {
  if (!client || !isValidEbookSlug(slug)) {
    return null;
  }

  try {
    return await client.fetch<Ebook | null>(
      ebookBySlugQuery,
      { slug },
      { next: { revalidate: 300 } },
    );
  } catch {
    return null;
  }
}

export async function validateEbookCompletionToken(token: string | undefined) {
  // Client-side query parameters are not secure access control. When the external
  // form provider is connected, verify its server-issued completion token here.
  return Boolean(token);
}
