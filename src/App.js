// import FIltersArea from "./components/filters/FIltersArea";
import TableArea from "./components/table/TableArea";
import React from "react";
import { connect } from "react-redux";
import ModalAddItem from "./components/modals/ModalAddItem";
import Loader from "./components/ui/Loader";
import { GetLoading } from "./redux/selectors";
import FixedButtons from "./components/ui/FixedButtons";
import ButtonMenu from "./components/ui/ButtonMenu";
import ModalViewItem from "./components/modals/ModalViewItem";

const App = ({ loading }) => {
  return (
    <div className="App">
      {loading && <Loader />}
      {/* <FixedButtons /> */}
      <ModalAddItem />
      <ModalViewItem />
      {/* <FIltersArea /> */}
      <TableArea />
      <ButtonMenu />
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: GetLoading(state),
});

export default connect(mapStateToProps)(App);
