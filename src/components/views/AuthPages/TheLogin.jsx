import React from "react";
import {
  TextField,
  CheckboxField,
  Button,
} from "../../Reusable/Form/TextField";
import { BsEnvelope } from "react-icons/bs";
import { BiLock } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useContextCrud } from "../../../context/ContactsCrudContext";
import { getSingleUserExist } from "../../Reusable/HelperFunction/helperfunction";

const TheLogin = () => {
  const { toggeleAuthHandler, authSubmission, userData } = useContextCrud();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required *"),
      password: Yup.string()
        .min(6, "Password must be 6 characters or more")
        .required("Password is required *"),
    }),
    onSubmit: async (values) => {
      let userObject = getSingleUserExist(values.email, userData);
      if (userObject.isUserExist) {
        await authSubmission("login", JSON.stringify(userObject.user));
        alert("you are logged in successfully");
        navigate("/dashboard");
      } else {
        alert("Email doest not exists");
      }
    },
  });

  return (
    <React.Fragment>
      <div className="_card">
        <h3 className="pt-3 pb-1 text-center">Login</h3>
        <div className="_card_body">
          <form onSubmit={formik.handleSubmit}>
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

            <div className="_flex_view mb-2">
              <div>
                <CheckboxField
                  inputType={"checkbox"}
                  labelText={"Remember_me"}
                  checkValue={"remember_me"}
                />
                <label htmlFor="remember_me">Remember me</label>
              </div>

              <div className="_forgot_link">
                <Link to="/">Forgot Password ?</Link>
              </div>
            </div>

            <div className="mt-4">
              <Button
                fieldType={"submit"}
                defaultClass={"btn"}
                btnName={"Login"}
                btnType={"gradient"}
                icon={<MdArrowForwardIos />}
              />
            </div>
          </form>

          <h6 className="mt-3 mb-1 text-center">
            Don't have an account yet?{" "}
            <a href="#" onClick={() => toggeleAuthHandler()}>
              Sign up
            </a>{" "}
          </h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TheLogin;
