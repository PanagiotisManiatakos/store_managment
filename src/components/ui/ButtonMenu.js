import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbFilter } from "react-icons/tb";
import { connect } from "react-redux";
import "../../buttonmenu.css";
import { SetOpenItemNew } from "../../redux/actions";

const ButtonMenu = ({ setShowNew }) => {
  const navRef = React.useRef();
  const toggleRef = React.useRef();
  const maskRef = React.useRef();
  const activeClass = "is-active";

  const activateMenu = () => {
    navRef.current.classList.add(activeClass);
    toggleRef.current.classList.add(activeClass);
    maskRef.current.classList.add(activeClass);
  };

  const deactivateMenu = () => {
    navRef.current.classList.remove(activeClass);
    toggleRef.current.classList.remove(activeClass);
    maskRef.current.classList.remove(activeClass);
  };

  const clickOnMenu = (e) => {
    e.preventDefault();
    toggleRef.current.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
  };

  const handleNew = () => {
    deactivateMenu();
    setShowNew(true);
  };

  React.useEffect(() => {
    maskRef.current = document.createElement("div");
    maskRef.current.classList.add("c-mask");
    document.body.appendChild(maskRef.current);
    maskRef.current.addEventListener("click", () => {
      deactivateMenu();
    });
  }, []);

  return (
    <nav id="c-circle-nav" ref={navRef} className="c-circle-nav">
      <button id="c-circle-nav__toggle" ref={toggleRef} onClick={clickOnMenu} className="c-circle-nav__toggle">
        <span>Toggle</span>
      </button>
      <ul className="c-circle-nav__items">
        <li className="c-circle-nav__item" onClick={handleNew}>
          <a href="#" className="c-circle-nav__link d-flex justify-content-center align-items-center">
            <AiOutlinePlus color="white" />
          </a>
        </li>
        <li className="c-circle-nav__item">
          <a href="#" className="c-circle-nav__link d-flex justify-content-center align-items-center">
            <TbFilter color="white" />
          </a>
        </li>
        <li className="c-circle-nav__item">
          <a href="#" className="c-circle-nav__link">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgdmlld0JveD0iMCAwIDk2IDk2Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNzAuOTM1IDY1LjcxbC05Ljg5Ni05Ljg5NGMyLjM4NS0zLjQ0IDMuNTc3LTcuMjc3IDMuNTc3LTExLjUwOCAwLTIuNzUtLjUzNi01LjM4LTEuNi03Ljg5LTEuMDctMi41MS0yLjUxNS00LjY3My00LjMzLTYuNDktMS44MTUtMS44MTctMy45OC0zLjI2LTYuNDktNC4zMjctMi41MS0xLjA2OC01LjE0LTEuNi03Ljg5LTEuNnMtNS4zOC41My03Ljg5IDEuNmMtMi41MSAxLjA2Ni00LjY3IDIuNTEtNi40OSA0LjMyNy0xLjgxNiAxLjgxNy0zLjI2IDMuOTgtNC4zMjYgNi40OS0xLjA2NyAyLjUxLTEuNiA1LjE0Mi0xLjYgNy44OTJzLjUzMyA1LjM3OCAxLjYwMiA3Ljg4N2MxLjA2NiAyLjUxIDIuNTEgNC42NzYgNC4zMjcgNi40OXMzLjk4IDMuMjYgNi40OSA0LjMzYzIuNTEgMS4wNjQgNS4xNCAxLjYgNy44OSAxLjYgNC4yMyAwIDguMDY4LTEuMTkgMTEuNTA3LTMuNTc3bDkuODk1IDkuODYyYy42OTIuNzMyIDEuNTU4IDEuMDk4IDIuNiAxLjA5OC45OTUgMCAxLjg2NC0uMzY1IDIuNTkyLTEuMDk4LjczLS43MjcgMS4wOTYtMS41OTYgMS4wOTYtMi41OTIgMC0xLjAyLS4zNTMtMS44ODUtMS4wNjUtMi42ek01My40NCA1My40NGMtMi41MyAyLjUyNy01LjU3NSAzLjc5My05LjEzMiAzLjc5My0zLjU2IDAtNi42LTEuMjY1LTkuMTMtMy43OTItMi41MjgtMi41My0zLjc5NC01LjU3My0zLjc5NC05LjEzIDAtMy41NiAxLjI2Ni02LjYgMy43OTQtOS4xMyAyLjUzLTIuNTI4IDUuNTctMy43OTQgOS4xMy0zLjc5NCAzLjU1OCAwIDYuNiAxLjI2NiA5LjEzIDMuNzk0IDIuNTI3IDIuNTMgMy43OTMgNS41NyAzLjc5MyA5LjEzIDAgMy41NTgtMS4yNjQgNi42LTMuNzkgOS4xM3oiLz48L3N2Zz4="
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const mapDispatchTopPros = (dispatch) => ({
  setShowNew: (value) => dispatch(SetOpenItemNew(value)),
});

export default connect(null, mapDispatchTopPros)(ButtonMenu);
