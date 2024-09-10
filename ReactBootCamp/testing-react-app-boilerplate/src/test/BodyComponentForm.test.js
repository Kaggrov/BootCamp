import BodyComponent from "../Components/BodyComponent";
import Enzyme ,{shallow} from 'enzyme'

//Scenario: Check if form accepts input and changes state value
test('BodyComponent renders Form, accepts input and change state value', () => {

    let wrapper = shallow(<BodyComponent/>)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'changedName' } })

    expect(wrapper.state('value')).toEqual('changedName')
});