import React from "react";
import "../styles/signForm.css";
import { FaFacebookF, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import * as yup from 'yup'
import {useFormik} from 'formik'


const registerSchema = yup.object().shape({
  familyName: yup.string().required("First name is required"),
  givenName:yup.string().required("Given name is required"),
  email: yup.string().email("Invalid email format").
  required("Email is required").test("is-valid", (message) => `${message.path} is invalid`, (value) => value ? isEmailValidator(value) : new yup.ValidationError("Invalid value")),
  password: yup.string().required("Password is required").min(8, 'Password is too short - should be 8 chars minimum.').
  matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

function Register() {
  const formik = useFormik({
    initialValues:{
      familyName:"",
      givenName:"",
      email:"",
      password:"",
      name:""
    },
    validationSchema:registerSchema,
    onSubmit:(values) =>{
      console.log(values)
    } 
  })



  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: "10"}}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{color: "hsl(218, 81%, 95%)"}}
            >
              The best offer <br />
              <span style={{color: "hsl(218, 81%, 75%)"}}>for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control border  outline"
                          name="familyName"
                          value={formik.values.familyName}
                          onChange={formik.handleChange("familyName")}
                          onBlur={formik.handleBlur("familyName")}
                        />
                        <div className="text-danger mt-1 " style={{fontSize:"13px"}}>{formik.touched.familyName && formik.errors.familyName}</div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                    />
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaFacebookF size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGoogle size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaTwitter size={16} />
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <FaGithub size={16} /> 
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
