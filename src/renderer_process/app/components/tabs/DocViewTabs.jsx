import { connect } from 'react-redux'
import { setDocViewTab } from '../../state_manager/actions'
import Tabs from './Tabs.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.switchDocument.sectionActiveTab
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handler: index => {
            dispatch(setDocViewTab(index))
            dispatch({type: 'LOG_ENTITIES'})
        }
    }
}

const DocViewTabs = connect(mapStateToProps, mapDispatchToProps)(Tabs)

export default DocViewTabs
