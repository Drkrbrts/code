import * as Yup from "yup";


const registerSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(50).required("Is Required"),
  lastName: Yup.string().min(2).max(50).required("Is Required"),
  email: Yup.string().email("Is Valid Email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /[a-zA-Z]/,
      " One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  passwordConfirm: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /[a-zA-Z]/,
      " One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  avatarUrl: Yup.string().min(2).max(225).required("Is Required"),
});

export {registerSchema}