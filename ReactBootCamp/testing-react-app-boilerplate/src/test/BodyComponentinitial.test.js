import BodyComponent from "../Components/BodyComponent";
import Enzyme ,{shallow} from 'enzyme'
// Scenario: Check if state value is set to `John` by default
test('Initial value of state to be John', () => {

    let wrapper = shallow(<BodyComponent/>)

    expect(wrapper.state('value')).toEqual('John')
});