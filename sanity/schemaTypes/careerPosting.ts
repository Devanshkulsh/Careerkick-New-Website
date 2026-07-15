import { defineField, defineType } from "sanity";

export const careerPosting = defineType({
  name: "careerPosting",
  title: "Career Posting",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Card Header Image",
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
    }),
    defineField({
      name: "imageAlt",
      title: "Image Alt Text",
      type: "string",
      description: "Fallback alt text used if the image field does not include one.",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: "applyLabel",
      title: "Apply Button Label",
      type: "string",
      description: "Example: Apply Now, Send Resume, Join Team",
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "number",
      initialValue: 10,
      description: "Lower numbers appear first.",
    }),
    defineField({
      name: "isActive",
      title: "Show on website",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "department",
    },
  },
});
