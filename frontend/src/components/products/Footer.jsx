import React from "react";

function Footer() {
  return (
    <footer style={{ height: "55vh" }} className="bg-dark mt-3 text-white pt-5 pe-5 py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h6 style={{ color: "lightgray" }}>ABOUT</h6>
            <ul className="list-unstyled">
              <li>contact us</li>
              <li>about us</li>
              <li>careers</li>
              <li>Flipkart Stories</li>
              <li>Press</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 style={{ color: "lightgray" }}>GROUP COMPANIES</h6>
            <ul className="list-unstyled">
              <li>Myntra</li>
              <li>Flipkart Wholesale</li>
              <li>cleartrip</li>
              <li>Shopshy</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 style={{ color: "lightgray" }}>CONSUMER POLACIES</h6>
            <ul className="list-unstyled">
              <li>Cancellation & Return </li>
              <li>Terms of use</li>
              <li>Secuirity</li>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Grievance Redressal</li>
              <li>EPR Compliance</li>
            </ul>
          </div>
          <div
            className="col-md-2"
            style={{ borderRight: ".5px solid lightgray" }}
          >
            <h6 style={{ color: "lightgray" }}>HELP</h6>
            <ul className="list-unstyled">
              <li>Payments</li>
              <li>Shoping</li>
              <li>Cancellation & Return</li>
              <li>FAQ</li>
              <li>Report Infrigment</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h6 style={{ color: "lightgray" }}>MAIL US:</h6>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India
          </div>
          <div className="col-md-2">
            <h6 style={{ color: "lightgray" }}>RESISTERD OFFICE ADDRESS</h6>
            Flipkart Internet Private Limited, Buildings Alyssa, Begonia & Clove
            Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village,
            Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107
            Telephone: 044-45614700
          </div>
        </div>
       <hr />
       <div>
        <ul className="d-flex justify-content-between w-75">
            <li>Become a seller</li>
            <li>Advertise</li>
            <li>Gift Card</li>
            <li>Help canter</li>
            <li>© 2007-2024 Flipkart.com</li>
        </ul>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
