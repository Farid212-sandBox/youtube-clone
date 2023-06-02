import React, { useState } from "react";

const GamingPage = () => {
  const [message, setMessage] = useState("hello");
  console.log(message);
  return <>{message}</>;
};

export default GamingPage;
