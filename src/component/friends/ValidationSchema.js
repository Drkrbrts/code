import * as Yup from "yup";

let formValidationSchema = Yup.object().shape({
  title: Yup.string().min(3).max(30).required("Required"),
  bio: Yup.string().required("Required"),
  summary: Yup.string().required("Required"),
  headline: Yup.string().required("Required"),
  slug: Yup.string().required("Required"),
  statusId: Yup.string().required("Required"),
  image: Yup.object().shape({
    imageTypeId: Yup.number().required("Required"),
    imageUrl: Yup.string().required("Required"),
  }),
  skills: Yup.array()
    .of(
      Yup.object().shape({
        id: Yup.number().required("Required"),
        name: Yup.string().required("Required"),
      })
    )
    .required("Required at least a minimum of 1 Skill")
    .min(1),
});

export { formValidationSchema };
