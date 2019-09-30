import React, { useState, useEffect } from "react";

const useInput = (initValue: string = "") => {
  const [value, setValue] = useState<string>(initValue);
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  return [value, setValue, handleInputChange];
};

export default useInput;
