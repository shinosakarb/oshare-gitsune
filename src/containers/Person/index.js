import { connect } from 'react-redux'
import { createActionDispatch } from '../../actions'
import { createActionRecord } from '../../records'
import Person from '../../components/Person'
const mapStateToProps = state => ({records: createActionRecord(state.data)})
const mapDispatchToProps = dispatch => ({actions: createActionDispatch(dispatch)})
export default connect(mapStateToProps, mapDispatchToProps)(Person)
