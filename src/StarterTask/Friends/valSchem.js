import * as Yup from "yup";

const formValidation = Yup.object().shape({
    title: Yup.string().min(2).max(25).required('Field Required'),
    bio: Yup.string().min(3).max(50).required('Field Required'),
    summary: Yup.string().min(10).max(100).required('Field Required'),
    headline: Yup.string().min(2).max(25).required('Field Required'),
    slug: Yup.string().min(2).max(25).required('Field Required'),
    primaryImage: Yup.string().min(10).max(200).required('Field Required'),
})

export default formValidation