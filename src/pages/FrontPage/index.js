import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { compose } from "redux";

import { IGlobalStore } from "../../reducers/index";

import { fetchData } from "../../actions/MainActions/index";

import FrontPage from "./FrontPage";

// export type IFrontPage = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = ({main}) => ({
    data: main.data,
});

const mapDispatchToProps = {
    fetchData,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(FrontPage);
