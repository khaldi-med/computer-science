import { Link } from "react-router-dom";

const Spinach = () => {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <Link to={{ pathname: "/" }}>Click here to go back</Link>
    </>
  );
};

export default Spinach;
