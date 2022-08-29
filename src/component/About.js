import React from "react";
import {aboutfirst,
    aboutsecond,
    abouaboutthirdt }
    from '../assets/images'

function About() {
  return (
    <>
      <div class="main">
        <div class="row col-md-12">
          <div class="col-md-6">
            <div class="container-fluid mt-3 abtmain">
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
                <h5>About Us</h5>
                <h3>THOR GROUP OF GYMS</h3>
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
                  <h5>Gym Overview</h5>
                  <h3>READY FOR SOME SWEATING</h3>
                </div>

                <div class="text-about mt-5 text-left">
                  <p>
                    Duis fermentum libero quis commodo blandit. Etiam urna
                    ligula, volutpat non eros non, suscipit lacinia orci. Donec
                    eu facilisis lorem, eget laoreet mi. Vivamus laoreet, urna
                    eget laoreet ultrices, dolor risus ornare nisl, ut lacinia
                    ipsum odio id mi.
                  </p>

                  <p class="mt-5">
                    Aenean sollicitudin volutpat porta. Fusce fringilla eros
                    turpis, nec congue magna ullamcorper elementum.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="col-md-2"></div>

              <div class="col-md-10 myleft heading ">
                <div class="text-about text-left">
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
          </div>
        </section>

        <div class="divider"></div>

        <section class="row col-md-12  text-center">
          <div class="container">
            <div class="col-md-12 row">
              <div class="container">
                <div class="col-md-12">
                  <div class="container">
                    <div class="col-md-10 myleft heading ">
                      <div class="container">
                        <div class="border-left text-left">
                          <h5>Gym Overview</h5>
                          <h3>READY FOR SOME SWEATING</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="divider"></div>

        <section class="row col-md-12 text-center">
          <div class="col-md-12 row myicons">
            <div class="col-md-4 ">
              <div class="container">
                <img src={aboutfirst} alt="" class="img-fluid" />

                <h3 class="themecolor mt-2">CARDIO SESSION</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse in fermentum dolor. Cras convallis, tellus ac
                  tempor lobortis, a bibendum ligula diam nec dolor.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="container">
                <img src={aboutsecond} alt="" class="img-fluid" />

                <h3 class="themecolor mt-2">WEIGHT LOSS TRAINING</h3>
                <p>
                  Praesent a nibh eget diam pellentesque venenatis non eget
                  diam. Nam in massa metus. Donec porta, ligula non feugiat
                  vulputate, odio leo condimentum sapien.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="container">
                <img src={abouaboutthirdt} alt="" class="img-fluid" />

                <h3 class="themecolor mt-2">KICK BOXING</h3>
                <p>
                  Praesent a nibh eget diam pellentesque venenatis non eget
                  diam. Nam in massa metus. Donec porta, ligula non feugiat
                  vulputate, odio leo condimentum sapien.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="divider"></div>
      </main>
    </>
  );
}

export default About;
