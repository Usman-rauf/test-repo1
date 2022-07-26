import * as yup from "yup";

export const FormSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  symbol: yup.string().required("Required"),
  des: yup.string().required("Required"),
  price: yup.string().required("Required"),
  date: yup.string().required("Required"),
  address: yup.string().required("Required"),
  contact: yup.string().required("Required"),
  website: yup.string().required("Required"),
  twitter: yup.string().required("Required"),
  telegram: yup.string().required("Required"),
  redit: yup.string().required("Required"),
  discord: yup.string().required("Required"),
  logo: yup.string().required("Required"),
  description: yup.string().required("Required"),
});
