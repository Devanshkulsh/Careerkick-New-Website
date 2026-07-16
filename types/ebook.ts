export interface Ebook {
  _id: string;
  title: string;
  slug: string;
  state: string;
  description?: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  mediaFileUrl?: string;
  originalFilename?: string;
  mimeType?: string;
  extension?: string;
  assetId?: string;
  fileLabel?: string;
  order?: number;
  isActive: boolean;
  seoTitle?: string;
  seoDescription?: string;
}
