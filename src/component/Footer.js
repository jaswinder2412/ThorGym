import React from "react";
import {
  galleryOne,
  galleryTwo,
  galleryThree,
  galleryFour,
  galleryFive,
} from "../assets/images";

function Footer() {
  return (
    <footer>
      

      <section className=" col-md-12 footerbanner ">
        <div className="col-md-12 row">
          <div className="col-md-6 text-center mt-5">
            <div className="foot-brand">
              <h1>
                {" "}
                <span>THOR</span> GYM
              </h1>
            </div>

            <div className="row mt-5 col-md-12">
              <div className="col-md-6">
                <h4 className="mb-3">Quick Links</h4>

                <ul className="mywidth">
                  <li>className Details</li>
                  <li>Trainer Profiles</li>
                  <li>F.A.Q</li>
                  <li>Leave a Message</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="mb-3">Public Sources</h4>

                <ul className="mywidth">
                  <li>Lorem Ipsum</li>
                  <li>Maecenas Facilisis</li>
                  <li>Terms</li>
                  <li>Chat Now</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6  text-left">
            <div className="border-left">
              <h5>Our Gallery</h5>
              <h3>Gym Photo</h3>
            </div>

            <div className="row mt-5 col-md-12">
              <div className="col-md-6">
                <img src={galleryOne} className="img-fluid" alt="" />
              </div>
              <div className="col-md-6">
                <div className=" row col-md-12">
                  <div className="col-md-6">
                    <img src={galleryTwo} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <img src={galleryThree} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className=" row col-md-12">
                  <div className="col-md-6">
                    <img src={galleryFour} className="img-fluid" alt="" />
                  </div>
                  <div className="col-md-6">
                    <img src={galleryFive} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" col-md-12 bgmywarning footerbottom ">
        <div className="col-md-12 row">
          <div className="col-md-6 text-left ps-5 pt-3 pb-1">
            <p>Copyright @ 2022</p>
          </div>
          <div className="col-md-6 text-center pe-5 pt-3 pb-1">
            <p>Designed By Jaswinder Singh</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
