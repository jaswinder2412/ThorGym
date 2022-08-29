import React from "react";
import {
    trainesrs,
    trainerOne,
    trainerTwo,
    trainerThree
} from '../assets/images'

function Trainers() {
  return (
    <>
      <div class="main">
        <div class="row col-md-12">
          <div class="col-md-6">
            <div class="container-fluid mt-3 trainmain">
              <div class="banner-texts row col-md-12 text-center">
                <h1 class="first-text">Elite</h1>
                <h1 class="second-text"> Trainer</h1>
              </div>
            </div>
          </div>

          <div class="col-md-6 cp">
            <div class="col-md-2"></div>
            <div class="col-md-10 myleft heading ">
              <div class="border-left text-left">
                <h5>Expert Team</h5>
                <h3>OUR TRAINERS</h3>
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
                  <h5>Trainer Overview</h5>
                  <h3>HARD WORK PAYS OFF</h3>
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
                  <img src={trainesrs} alt="" class="img-fluid" />
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
                          <h5>Dedicated Team</h5>
                          <h3>Our Trainers</h3> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="mt-5"></div>

        <section class="row col-md-12 text-center">
          <div class="col-md-12  mybuttons row myicons">
            <div class="col-md-4 multiple-items ">
              <div class="container">
                <img src={trainerOne} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-4 multiple-items">
              <div class="container">
                <img src={trainerTwo} alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-4 multiple-items">
              <div class="container">
                <img src={trainerThree} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
        </section>
 
      </main>
    </>
  );
}

export default Trainers;
