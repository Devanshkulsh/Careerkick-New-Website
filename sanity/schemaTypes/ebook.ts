import { defineField, defineType } from "sanity";

export const ebook = defineType({
  name: "ebook",
  title: "E-Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Describe the image for accessibility and SEO.",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImageAlt",
      title: "Featured Image Alt Text",
      type: "string",
      description: "Fallback alt text used if the image field does not include one.",
    }),
    defineField({
      name: "mediaFile",
      title: "Media File",
      type: "file",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "fileLabel",
      title: "File Label",
      type: "string",
      description: "Example: PDF, JPG, PNG, Guide, Document",
    }),
    defineField({
      name: "isActive",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "state",
      media: "featuredImage",
    },
  },
});
