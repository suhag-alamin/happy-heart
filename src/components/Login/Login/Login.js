import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
      <Container fluid className="py-5 password-authentication-container">
        <div className="form-container bg-white px-4 py-3 rounded-2 shadow w-50 mx-auto mt-3">
          <h3 className="mb-5 text-center">
            Please <span className="section-title">LogIn</span>
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
            <input
              required
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("Password", {
                required: true,
                min: 8,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
              })}
            />
            {errors.Password && (
              <span className="field-error">
                Password should have at least 8 chracters, 2 uppercase, 3
                lowercase, 1 special character, 2 numbers.
              </span>
            )}

            <input className="happy-btn" type="submit" value="LogIn" />
            <div className="text-center mb-3">
              <Link style={{ color: "#2b2d42" }} to="/signup">
                New to Happy Heart?
              </Link>
            </div>
          </form>
          <div className="border-top py-4 text-center">
            <Button className="social-login happy-btn me-4">
              <span>
                <FontAwesomeIcon icon={faGoogle} />
              </span>
            </Button>
            <Button className="social-login happy-btn me-2">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
