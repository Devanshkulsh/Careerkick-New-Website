import type { AdmittedStudent } from "@/types";

const admittedStudentImageUrls = [
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156392/1_nr8i92.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156392/2_wqevcv.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156393/3_v0losa.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156396/4_f1josl.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156392/5_cfkhob.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156393/6_qxgeio.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156396/7_bgqagc.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156397/8_lvkec2.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156397/9_ldqmqj.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156399/10_z99fjv.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156400/11_ood5fq.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156401/12_jmz3kr.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156391/13_gnewsu.png",
  "https://res.cloudinary.com/dhlqc0ymy/image/upload/v1783156391/14_iof8od.png",
] satisfies string[];

export const admittedStudents: AdmittedStudent[] = admittedStudentImageUrls.map((image, index) => ({
  id: index + 1,
  image,
}));
