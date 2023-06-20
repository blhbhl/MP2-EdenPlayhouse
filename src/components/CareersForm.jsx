import React from "react";

const CareersForm = () => {
  return (
    <div className="form">
      <form action="">
        <div className="input-group">
          <label>Fullname</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input type="text" placeholder="Phone" />
        </div>
        <div className="input-group">
          <label>Fullname</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="input-group">
          <label>Message</label>
          <input type="text" placeholder="Message" />
        </div>
        <div className="input-group">
          <button type="button">Button</button>
        </div>
      </form>
    </div>
  );
};

export default CareersForm;
