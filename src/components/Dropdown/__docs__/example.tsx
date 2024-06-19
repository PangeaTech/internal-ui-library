import React, { useState, ChangeEvent } from "react";
import Dropdown from "../Dropdown";

const DropdownExample: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Dropdown
      label="Choose an option"
      options={["Option 1", "Option 2", "Option 3"]}
      value={selectedOption}
      onChange={handleChange}
    />
  );
};

export default DropdownExample;
