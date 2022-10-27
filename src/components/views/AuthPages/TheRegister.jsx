import React from "react";
import { TextField, Button } from "../../Reusable/Form/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BsEnvelope } from "react-icons/bs";
import { BiLock, BiUserPin } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { useContextCrud } from "../../../context/ContactsCrudContext";
import { getUserExist } from "../../Reusable/HelperFunction/helperfunction";

const TheRegister = () => {
  const { toggeleAuthHandler, authSubmission, userData } = useContextCrud();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Fullname is required *"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required *"),
      password: Yup.string()
        .min(6, "Password must be 6 characters or more")
        .required("Password is required *"),
    }),
    onSubmit: (values) => {
      let isUserAlreadyAvailable = getUserExist(values.email, userData);
      if (isUserAlreadyAvailable) {
        alert("email is already exists");
      } else {
        let array = [...userData];
        array.push(values);
        authSubmission("register", array);
        alert("account created");
        toggeleAuthHandler();
      }
    },
  });

  return (
    <React.Fragment>
      <div className="_card">
        <h3 className="pt-3 pb-1 text-center">Sign Up</h3>
        <div className="_card_body">
          <form onSubmit={formik.handleSubmit}>
            <TextField
              inputType={"text"}
              labelText={"Enter Full Name"}
              iconName={<BiUserPin />}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              value={formik.values.fullname}
              name={"fullname"}
              error={formik.errors.fullname}
              touched={formik.touched.fullname}
            />
            {formik.touched.fullname && formik.errors.fullname ? (
              <small className="text-danger">{formik.errors.fullname}</small>
            ) : null}
            <TextField
              inputType={"email"}
              labelText={"Enter Email Address"}
              iconName={<BsEnvelope />}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              value={formik.values.email}
              name={"email"}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <small className="text-danger">{formik.errors.email}</small>
            ) : null}
            <TextField
              inputType={"password"}
              labelText={"Enter Password"}
              iconName={<BiLock />}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              value={formik.values.password}
              name={"password"}
              error={formik.errors.password}
              touched={formik.touched.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <small className="text-danger">{formik.errors.password}</small>
            ) : null}
            <div className="mt-4">
              <Button
                fieldType={"submit"}
                defaultClass={"btn"}
                btnName={"Sign Up"}
                btnType={"gradient"}
                icon={<MdArrowForwardIos />}
              />
            </div>
          </form>

          <h6 className="mt-3 mb-1 text-center">
            Already have an account ?{" "}
            <a href="#" onClick={() => toggeleAuthHandler()}>
              Login
            </a>{" "}
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TheRegister;
