import React from "react";
import IconButton from "./IconButton";
import PrimaryButton from "./PrimaryButton";
import './Heading.css'
import Description from "./Description";

function Buttons() {
  return (
    <div>
      <h1 className='title'>Buttons</h1>
      <Description desc='A Button enables users to take an action, such as submitting a form, opening a dialog, etc. They communicate actions that users can take.' />
      <PrimaryButton />
      <IconButton />
    </div>
  );
}

export default Buttons;
