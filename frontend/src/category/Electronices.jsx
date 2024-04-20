import React from "react";

const Electronices = ({ setProduct, productDetails }) => {
  return (
    <div>
      <h2>HighLights</h2>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          required
          name="highlight1"
          className="form-control"
          type="text"
          placeholder="e.g. RAM GB and ROM GB"
        />
      </div>
      <div className="mb-3">
        <input
          required
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          name="highlight2"
          className="form-control"
          type="text"
          placeholder="e.g. display with height"
        />
      </div>
      <div className="mb-3">
        <input
          required
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          name="highlight3"
          className="form-control"
          type="text"
          placeholder="e.g. expandable upto (if)"
        />
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          name="highlight4"
          className="form-control"
          type="text"
          placeholder="e.g. battery capacity"
        />
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          name="highlight5"
          className="form-control"
          type="text"
          placeholder="e.g. Processor"
        />
      </div>
      <div className="mb-3">
        <input
          onChange={(e) => {
            setProduct({ ...productDetails, [e.target.name]: e.target.value });
          }}
          name="highlight6"
          className="form-control"
          type="text"
          placeholder="e.g. waranty if"
        />
      </div>
    </div>
  );
};

export default Electronices;
