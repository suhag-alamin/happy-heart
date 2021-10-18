import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const PasswordReset = () => {
  // auth context
  const { firebaseContext } = useAuth();
  const { passwordReset } = firebaseContext;
  // form data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email } = data;
    passwordReset(Email);
  };
  return (
    <>
      <Container fluid className="py-5 password-authentication-container">
        <div className="form-container bg-white px-4 py-3 rounded-2 shadow w-50 mx-auto mt-3">
          <h3 className="mb-5 text-center">
            Reset <span className="section-title">Password</span>
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && (
              <span className="field-error">This field is required</span>
            )}

            <input className="happy-btn" type="submit" value="LogIn" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default PasswordReset;
