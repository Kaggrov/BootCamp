import BodyComponent from "../Components/BodyComponent";
import Enzyme ,{shallow} from 'enzyme'
// Scenario: Check if Name entered field contains text as `Name Entered: John` by default
test('Initial value of Name entered field to be John', () => {

    let wrapper = shallow(<BodyComponent/>)
    expect(wrapper.find('p').text()).toBe('Name Entered: John');
});