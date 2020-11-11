import React from 'react';

const Contact = () => {

  return (
        <div>
           <div className="site-section pb-0 bg-light" id="contact-section">
            <div className="container">

              <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                  <h2 className="font-weight-bold text-black">Get In Touch</h2>
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi. Magni deserunt sunt labore.</p>
                </div>
              </div>

              <div className="row mb-1">

                <div className="col-md-4 text-center">
                  <p className="mb-4">
                    <span className="icon-person d-block h2 text-primary"></span>
                    <a href="https://mohit.worksnet.in" style={{color:'black'}} target="_blank" rel="noopener noreferrer">mohit.worksnet.in</a>
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <p className="mb-4">
                    <span className="icon-phone d-block h2 text-primary"></span>
                    <span style={{color:'black'}}>+91 7999 89 3361</span>
                  </p>
                </div>
                <div className="col-md-4 text-center">
                  <p className="mb-0">
                    <span className="icon-mail_outline d-block h2 text-primary"></span>
                    <a href="mohit@worksnet.in" style={{color:'black'}}>mohit@worksnet.in</a>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-5">



                  <form action="#" className="p-5 bg-white">

                    <h2 className="h4 text-black mb-5">Contact Form</h2> 

                    <div className="row form-group">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label className="text-black" htmlFor="fname">First Name</label>
                        <input type="text" id="fname" className="form-control"/>
                      </div>
                      <div className="col-md-6">
                        <label className="text-black" htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" className="form-control"/>
                      </div>
                    </div>

                    <div className="row form-group">

                      <div className="col-md-12">
                        <label className="text-black" htmlFor="email">Email</label> 
                        <input type="email" id="email" className="form-control"/>
                      </div>
                    </div>

                    <div className="row form-group">

                      <div className="col-md-12">
                        <label className="text-black" htmlFor="subject">Subject</label> 
                        <input type="subject" id="subject" className="form-control"/>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <label className="text-black" htmlFor="message">Message</label> 
                        <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
                      </div>
                    </div>

                    <div className="row form-group">
                      <div className="col-md-12">
                        <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white"/>
                      </div>
                    </div>


                  </form>
                </div>
                
              </div>
            </div>
          </div> 
        </div>
  );
}

export default Contact;
