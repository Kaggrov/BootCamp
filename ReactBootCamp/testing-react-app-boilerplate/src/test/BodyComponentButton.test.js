
//Scenario: Check if Name Entered field contains `Name Entered: Guest` when `button` is clicked
import BodyComponent from "../Components/BodyComponent";
import Enzyme ,{shallow} from 'enzyme'

test('BodyComponent changes state value to default when clicked', () => {
    let wrapper = shallow(<BodyComponent/>)
    wrapper.find('button').simulate('click')
    expect(wrapper.find('p').text()).toBe("Name Entered: Guest");
});