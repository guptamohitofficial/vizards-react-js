import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../hoc/SideMenu";
import { cookies } from "../cc/code";
import axios from "axios";

class Create extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="card col-6 mb-4">
          <div className="m-2 card-body border-top border-bottom border-success">
            <img
              src="/static/images/create_card.svg"
              alt="Create Card svg example"
              className=""
              style={{ maxWidth: "100%" }}
            />
            <Link
              to="/create/card"
              className="btn btn-outline-primary"
              style={{ marginTop: "15%" }}
            >
              A Card
            </Link>
          </div>
        </div>

        <div className="card col-6 mb-4">
          <div className="m-2 card-body border-top border-bottom border-success">
            <img
              src="/static/images/create_meeting.svg"
              alt="Create Card svg example"
              className=""
              style={{ maxWidth: "100%" }}
            />
            <Link
              to="/create/meeting"
              className="btn btn-outline-primary"
              style={{ bottom: "2em" }}
            >
              Meeting
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Create = SideMenu(Create);
export default Create;

class CreateACard extends Component {
  render() {
    function saveIntro(event) {
      event.preventDefault();
      var f = event.target;
      var form = new FormData();

      form.append("company_name", f.getElementsByClassName(" idata")[0].value);
      form.append(
        "designation_name",
        f.getElementsByClassName(" idata")[1].value
      );
      form.append("fname", f.getElementsByClassName(" idata")[2].value);
      form.append("lname", f.getElementsByClassName(" idata")[3].value);
      form.append("phone", f.getElementsByClassName(" idata")[4].value);
      form.append("site", f.getElementsByClassName(" idata")[5].value);
      form.append("email", f.getElementsByClassName(" idata")[6].value);
      form.append("logo", f.getElementsByClassName(" idata")[7].files[0]);
      form.append("address", f.getElementsByClassName(" idata")[8].value);

      const headForm = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Token ${cookies.get("token")}`
        }
      };

      axios.post(
        "http://localhost:8000/card/add-new-visiting-card",
        form,
        headForm
      );
    }

    return (
      <div id="accordion">
        <div className="card">
          <button
            id="headingOne"
            style={{ fontSize: "1.5em" }}
            className="card-header text-left btn btn-link text-black"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <span className="wrap-icon icon-arrow"></span>
            Intro
          </button>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              <form onSubmit={saveIntro}>
                <div className="row form-group">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="business_name"
                      className="form-control idata"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="designation_name"
                      placeholder="Your Designation"
                      className="form-control idata"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="Your First Name"
                      className="form-control idata"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Your Last Name"
                      className="form-control idata"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      maxLength="12"
                      placeholder="Phone Number"
                      className="form-control idata"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website"
                      className="form-control idata"
                    />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-8">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control idata"
                    />
                  </div>

                  <div className="col-md-4">
                    {/*<span
                      className="wrap-icon my-auto text-info icon-image"
                      style={{ fontSize: "2em" }}
                    ></span>
                    <span className="text-black my-auto">Upload Logo</span>*/}
                    <input
                      type="file"
                      name="icon"
                      className="form-control idata"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12 px-0">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control idata"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-12 px-0">
                    <input
                      type="submit"
                      value="Save"
                      className="form-control btn btn-success"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <button
            id="headingTwo"
            className="btn text-left btn-link card-header"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            What You Do
          </button>

          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              <form id="intro_card" method="POST">
                <div className="form-group">
                  <div className="col-md-12 px-0">
                    <textarea
                      placeholder="Write what great you do .. "
                      rows="8"
                      0id="about_card"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="card">
          <button
            id="headingThree"
            className="btn btn-link card-header"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            Best Work Samples
          </button>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">Pictures</div>
          </div>
        </div>

        <div className="card">
          <button
            id="headingFour"
            className="card-header btn btn-link"
            data-toggle="collapse"
            data-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            Links
          </button>
          <div
            id="collapseFour"
            className="collapse"
            aria-labelledby="headingFour"
            data-parent="#accordion"
          >
            <div className="card-body">Inputs</div>
          </div>
        </div>

        <div className="card">
          <button
            id="headingFive"
            className="btn btn-link card-header"
            data-toggle="collapse"
            data-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            Contact Info
          </button>

          <div
            id="collapseFive"
            className="collapse"
            aria-labelledby="headingFive"
            data-parent="#accordion"
          >
            <div className="card-body">Inputs</div>
          </div>
    </div>*/}
      </div>
    );
  }
}

CreateACard = SideMenu(CreateACard);
export { CreateACard };
