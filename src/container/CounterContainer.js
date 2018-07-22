import Counter from "../component/Counter";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        count: state[ownProps.index - 1]
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    let index = ownProps.index - 1;
    console.log("ggggddg");
    return {
        add: () => dispatch({type: "add", index: index}),
        sub: () => dispatch({type: "sub", index: index})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)

