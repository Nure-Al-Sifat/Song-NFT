import React from "react";

function CustomButton(props) {
  return (
    <>
      <div className="CustomButton">
        <button>{props.btnName}</button>
      </div>
    </>
  );
}

export default CustomButton;
