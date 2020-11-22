import React from "react";

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <div className="site-section bg-light" id="blog-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 text-center">
                <h2 className="font-weight-bold text-black">Blog</h2>
                <p className="mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi, explicabo, quasi. Magni deserunt sunt labore.
                </p>
              </div>
            </div>

            <div className="row">
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay=""
              >
                <div className="h-entry">
                  <a href="/single.html">
                    <img
                      src="/static/images/img_2.jpg"
                      alt="some blog post 1"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="/">Best For Web Startups and Web Apps</a>
                  </h2>
                  <div className="meta mb-4">
                    Ham Brook <span className="mx-2">&bullet;</span> Jan 18,
                    2020<span className="mx-2">&bullet;</span>{" "}
                    <a href="/">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                  <p>
                    <a href="/">Continue Reading...</a>
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="h-entry">
                  <a href="/single.html">
                    <img
                      src="/static/images/img_4.jpg"
                      alt="some blog post 2"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="/">Best For Web Startups and Web Apps</a>
                  </h2>
                  <div className="meta mb-4">
                    James Phelps <span className="mx-2">&bullet;</span> Jan 18,
                    2020<span className="mx-2">&bullet;</span>{" "}
                    <a href="/">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                  <p>
                    <a href="/">Continue Reading...</a>
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4 mb-lg-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="h-entry">
                  <a href="/single.html">
                    <img
                      src="/static/images/img_2.jpg"
                      alt="some blog post 3"
                      className="img-fluid"
                    />
                  </a>
                  <h2 className="font-size-regular">
                    <a href="/">Best For Web Startups and Web Apps</a>
                  </h2>
                  <div className="meta mb-4">
                    James Phelps <span className="mx-2">&bullet;</span> Jan 18,
                    2020<span className="mx-2">&bullet;</span>{" "}
                    <a href="/">News</a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus eligendi nobis ea maiores sapiente veritatis
                    reprehenderit suscipit quaerat rerum voluptatibus a eius.
                  </p>
                  <p>
                    <a href="/">Continue Reading...</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
