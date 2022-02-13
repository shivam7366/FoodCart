import "./Header.css";
import measlImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>Desi Rasoi</h1>
        <HeaderCartButton onClick={props.onShowCart}>
          Your cart
        </HeaderCartButton>
      </header>
      <div className="main-image">
        <img src={measlImage} alt="A table full of desi and delicious Food!" />
      </div>
    </>
  );
};

export default Header;
