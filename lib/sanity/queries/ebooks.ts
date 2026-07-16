const ebookProjection = `{
  _id,
  title,
  "slug": slug.current,
  state,
  description,
  "featuredImageUrl": featuredImage.asset->url,
  "featuredImageAlt": coalesce(featuredImage.alt, featuredImageAlt, title),
  "mediaFileUrl": mediaFile.asset->url,
  "originalFilename": mediaFile.asset->originalFilename,
  "mimeType": mediaFile.asset->mimeType,
  "extension": mediaFile.asset->extension,
  "assetId": mediaFile.asset->_id,
  fileLabel,
  order,
  isActive,
  seoTitle,
  seoDescription
}`;

export const activeEbooksQuery = `*[
  _type == "ebook" &&
  isActive == true
] | order(coalesce(order, 9999) asc, state asc, _createdAt desc) ${ebookProjection}`;

export const ebookBySlugQuery = `*[
  _type == "ebook" &&
  isActive == true &&
  slug.current == $slug
][0] ${ebookProjection}`;
