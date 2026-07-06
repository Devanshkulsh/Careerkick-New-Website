import { defineField, defineType } from "sanity";

export const counsellingNotification = defineType({
  name: "counsellingNotification",
  title: "Counselling Notification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Example: Seat Matrix, Registration, Choice Filling",
    }),
    defineField({
      name: "dateLabel",
      title: "Date Label",
      type: "string",
      description: "Example: JAN 30, Mon, 8 Jul",
    }),
    defineField({
      name: "startLabel",
      title: "Start Label",
      type: "string",
      description: "Optional range start, example: Aug 30, 10:00 am",
    }),
    defineField({
      name: "endLabel",
      title: "End Label",
      type: "string",
      description: "Optional range end, example: Sep 7, 07:00 pm",
    }),
    defineField({
      name: "linkLabel",
      title: "Link Label",
      type: "string",
      description: "Example: Application Form, Schedule",
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL",
      type: "url",
    }),
    defineField({
      name: "variant",
      title: "Card Style",
      type: "string",
      initialValue: "notice",
      options: {
        list: [
          { title: "Notice", value: "notice" },
          { title: "Schedule", value: "schedule" },
          { title: "Urgent", value: "urgent" },
        ],
        layout: "radio",
      },
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
      subtitle: "category",
    },
  },
});
