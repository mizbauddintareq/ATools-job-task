import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token === "QpwL5tke4Pnpja7X4") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Success",
            text: "Token: QpwL5tke4Pnpja7X4",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        if (data.error === "Missing password") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Missing password!",
          });
        }
        if (data.error === "user not found") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please input correct user email",
          });
        }
      });
    reset();
  };
  return (
    <Container fluid>
      <div className="pt-5 d-flex justify-content-around align-items-center">
        <div
          className="col-md-4 col-12 p-3 "
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <div className="text-center" style={{ color: "#303d5f" }}>
            <h1 className="fw-bold">Welcome Back!</h1>
            <p>Please login your account.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 mb-3 form-control "
              type="email"
              required
              placeholder="Your Email"
              {...register("email")}
            />
            <input
              className="p-2 mb-3 form-control"
              type="password"
              placeholder="Type Password"
              {...register("password")}
            />
            <input
              style={{ backgroundColor: "#78a1e1" }}
              className="btn p-2 mb-3 form-control text-white"
              type="submit"
              value="Login"
            />
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ color: "#303d5f" }}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked
                  readOnly
                />
                <label className="form-check-label">Remember Password</label>
              </div>
              <div>
                <label>Forgot Password?</label>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 d-none d-md-block">
          <img
            src="https://i.ibb.co/pP5zRgT/4565.jpg"
            className="img-fluid"
            alt="login"
            style={{ height: "80vh" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Login;
