import { Record } from 'immutable' 
const PersonRecord = Record({name: ''})
class Person extends PersonRecord {}
export default Person
