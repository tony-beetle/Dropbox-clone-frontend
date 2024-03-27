import React from 'react'
import loginimg1  from "../assets/images/login/2876475.jpg"
import loginimg2 from "../assets/images/login/3556960.jpg";
import bg from "../assets/images/login/3d-render-modern-technology-background-with-flowing-lines-floating-particles-design.jpg"

function Register() {
  return (
<>
<section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card " style={{ borderRadius: "1rem" }}>
                <div className="row  g-0">
                  <div style={{position:"relative"}} className="col-md-6 d-flex  col-lg-5 d-none d-md-block  ">
                    <img
                      src={loginimg2}
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" , position:"absolute",  top: "12%",
                      left: "0%"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4  p-lg-5 text-black">
                      <form className="">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold ">Beeetle Box</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label for="exampleInputPassword1" class="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                          ></input>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-primary btn-block "
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-2 pb-lg-1"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</>  )
}

export default Register