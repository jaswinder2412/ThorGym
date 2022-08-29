import React from "react";

function Contact() {
  return (
    <>
      <div class="main">
        <div class="row col-md-12">
          <div class="col-md-6">
            <div class="container-fluid mt-3 contmain">
              <div class="banner-texts row col-md-12 text-center">
                <h1 class="first-text">GET</h1>
                <h1 class="second-text">
                  THE <br /> SHAPE
                </h1>
              </div>
            </div>
          </div>

          <div class="col-md-6 cp">
            <div class="col-md-2"></div>
            <div class="col-md-10 myleft heading ">
              <div class="border-left text-left">
                <h5>Contact</h5>
                <h3>GET IN TOUCH</h3>
              </div>

              <div class="text-about mt-5 text-left">
                <p>
                  Duis fermentum libero quis commodo blandit. Etiam urna ligula,
                  volutpat non eros non, suscipit lacinia orci. Donec eu
                  facilisis lorem, eget laoreet mi. Vivamus laoreet, urna eget
                  laoreet ultrices, dolor risus ornare nisl, ut lacinia ipsum
                  odio id mi.
                </p>

                <p class="mt-5">
                  Duis fermentum libero quis commodo blandit. Etiam urna ligula,
                  volutpat non eros non, suscipit lacinia orci. Donec eu
                  facilisis lorem, eget laoreet mi. Vivamus laoreet, urna eget
                  laoreet ultrices, dolor risus ornare nisl, ut lacinia ipsum
                  odio id mi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div class="divider"></div>

        <section class="row col-md-12  text-left">
          <div class="col-md-12 row">
            <div class="col-md-6">
              <div class="col-md-2"></div>
              <div class="col-md-10 myleft heading ">
                <div class="border-left text-left">
                  <h5>Find Us</h5>
                  <h3>READY FOR WORKOUT</h3>
                </div>

                <div class="text-about mt-5 text-left">
                  <p class="ms-5">
                    {" "}
                    <i class="fa fa-phone"></i> &nbsp;&nbsp; Phone - +1
                    910-626-85255
                  </p>
                  <p class="ms-5">
                    {" "}
                    <i class="fa fa-envelope"></i> &nbsp;&nbsp; Email -
                    info@THORgym.com
                  </p>
                  <p class="ms-5 mb-5">
                    {" "}
                    <i class="fa fa-map-marker"></i> &nbsp;&nbsp; Address - 123
                    Fifth Avenue, New York, NY 10160
                  </p>
                </div>

                <div class="border-left text-left">
                  <h5>Find Us</h5>
                  <h3>ON THE SOCIALS</h3>
                </div>

                <div class="text-about mt-5 text-left">
                  <p class="ms-5">
                    {" "}
                    <i class="fa fa-facebook"></i> &nbsp;&nbsp;{" "}
                    <i class="fa fa-instagram"></i>&nbsp;&nbsp;{" "}
                    <i class="fa fa-twitter"></i>&nbsp;&nbsp;{" "}
                    <i class="fa fa-google"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 ">
              <div class="border-left text-left">
                <h5>Contact</h5>
                <h3> Contact Us Now</h3>
              </div>
              <form action="/action_page.php">
                <div class="mb-3 mt-3">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                </div>
                <div class="mb-3">
                  <label for="pwd">Subject:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="pwd"
                    placeholder="Subject"
                    name="pswd"
                  />
                </div>
                <div class="mb-3">
                  <label for="pwd">Message:</label>
                  <br />
                  <textarea
                    name=""
                    id=""
                    class="form-control"
                    rows="10"
                  ></textarea>
                </div>
                <button type="submit" class="btn form-control btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <section class="row col-md-12  text-left">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.037667236337!2d-73.99304888459417!3d40.73919667932892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3b24b424f%3A0x618680d3f8c2f773!2s123%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sca!4v1643841310053!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </>
  );
}

export default Contact;
