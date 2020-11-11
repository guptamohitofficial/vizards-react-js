import React from 'react'

const PublicFooter = () => {

  return (
    <footer className="bg-light fixed-bottom">           
        <div className="col-md-12 py-2 text-center">
            <small>
                <strong>vizards.</strong> is made with <i className="icon-code text-danger" aria-hidden="true"></i> React JS &amp; Django REST Framework <i className="icon-code text-danger" aria-hidden="true"></i>  by <a href="https://mohit.worksnet.in" rel="noopener noreferrer" target="_blank" >Mohit Gupta</a>
            </small>
        </div>
    </footer>
  );
}

export default PublicFooter;