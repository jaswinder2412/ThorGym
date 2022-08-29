import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="main">
        <div className="container-fluid mt-3 mymain">
          <div className="banner-texts row col-md-12 text-center">
            <h1 className="first-text">HARD ROCK GAME</h1>
            <h1 className="second-text">TIME TO CHANGE</h1>
            <Link className="btn btn-primary banner-button" to="/">
              Know More
            </Link>
          </div>
        </div>
      </div>

      <main>
        <div className="divider"></div>

        <section className="row col-md-12  text-left">
          <div className="col-md-12 row">
            <div className="col-md-6">
              <div className="col-md-2"></div>

              <div className="col-md-10 myleft heading ">
                <div className="border-left  text-left ">
                  <h5>Overview Intro</h5>
                  <h3>OUR STORY</h3>
                </div>

                <div className="text-about mt-5 text-left">
                  <iframe
                  title="This is a unique title" 
                    src="https://player.vimeo.com/video/383028147?h=c2ea932046"
                    width="100%"
                    height="360"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-md-2"></div>
              <div className="col-md-10 myleft heading ">
                <div className="border-left text-left">
                  <h5>About Us</h5>
                  <h3>Who We Are ?</h3>
                </div>

                <div className="text-about mt-5 text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in fermentum dolor. Cras convallis, tellus ac
                    tempor lobortis, enim ex rhoncus purus, a bibendum ligula
                    diam nec dolor. Nam tempus erat nunc, et ullamcorper nisl
                    finibus non. Cras ullamcorper erat nisl, et pretium ante
                    sodales id. Praesent a nibh eget diam pellentesque venenatis
                    non eget diam. Nam in massa metus.
                  </p>

                  <p className="mt-5">
                    Cras ullamcorper erat nisl, et pretium ante sodales id.
                    Praesent a nibh eget diam pellentesque venenatis non eget
                    diam. Nam in massa metus. Donec porta, ligula non feugiat
                    vulputate, odio leo condimentum sapien, et rhoncus tellus
                    est nec odio. Donec porta, ligula non feugiat vulputate,
                    odio leo condimentum sapien, et rhoncus tellus est nec odio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="row col-md-12 mybanner2 text-center">
          <div className="col-md-12 row myicons">
            <div className="col-md-3 ">
              <i className="fa fa-calendar" aria-hidden="true"></i>

              <h1>586</h1>
              <h5>Working Days</h5>
            </div>
            <div className="col-md-3">
              <i className="fa fa-users" aria-hidden="true"></i>

              <h1>1632</h1>
              <h5>Happy Clients</h5>
            </div>
            <div className="col-md-3">
              <i className="fa fa-trophy" aria-hidden="true"></i>

              <h1>874</h1>
              <h5>Successfull Stories</h5>
            </div>
            <div className="col-md-3">
              <i className="fa fa-child" aria-hidden="true"></i>

              <h1>1625</h1>
              <h5>Perfect Bodies</h5>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="row col-md-12  text-left">
          <div className="col-md-12 row">
            <div className="col-md-6">
              <div className="col-md-2"></div>
              <div className="col-md-10 myleft heading ">
                <div className="border-left text-left">
                  <h5>Our Strongest Team</h5>
                  <h3>MEET OUR EXPERTS</h3>
                </div>

                <div className="text-about mt-5 text-left">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse in fermentum dolor. Cras convallis, tellus ac
                    tempor lobortis, enim ex rhoncus purus, a bibendum ligula
                    diam nec dolor. Nam tempus erat nunc, et ullamcorper nisl
                    finibus non. Cras ullamcorper erat nisl, et pretium ante
                    sodales id. Praesent a nibh eget diam pellentesque venenatis
                    non eget diam. Nam in massa metus.
                  </p>

                  <p className="mt-5">
                    Cras ullamcorper erat nisl, et pretium ante sodales id.
                    Praesent a nibh eget diam pellentesque venenatis non eget
                    diam. Nam in massa metus.{" "}
                  </p>

                  <p className="mt-5">
                    <button className="btn btn-primary" type="button">
                      Trainers
                    </button>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col-md-2"></div>

              <div className="col-md-10 myleft heading ">
                <div className="text-about mt-5 text-left col-md-12 bg-dark pt-4 pb-4">
                  <div className="myform ps-5 pe-5">
                    <h3>Calculate your BMI</h3>

                    <p>
                      Calculate your Body Mass Index from your body weight and
                      height
                    </p>

                    <div className="row col-md-12">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Weight in Kg"
                            name="weight"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Height in feet"
                            name="Height"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mt-3 col-md-12">
                      <div className="col-md-6">
                        <div className="form-group">
                          <button className="btn btn-primary">Calculate</button>
                        </div>
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                    <div className="row mt-3 col-md-12">
                      <div className="col-md-12">
                        <h5>Your Weight is Normal</h5>
                        <p>Maintain your BMI with our fitness classNamees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
