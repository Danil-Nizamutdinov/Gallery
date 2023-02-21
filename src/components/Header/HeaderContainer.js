import { connect } from "react-redux";
import {setStyleToggle} from "../../redux/Search-Reducer"
import Header from "./Header"

const mapStateToProps = (state) => {
    return {
        styleToggle: state.searchReducer.styleToggle,
    }
}

const HeaderContainer = connect(mapStateToProps, {setStyleToggle})(Header)

export default HeaderContainer