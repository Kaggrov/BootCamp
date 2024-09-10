import BodyComponent from "../Components/BodyComponent";
import Enzyme ,{shallow} from 'enzyme'
//Scenario: Check if `h2` tag in BodyComponent contains text `Hello Charlie!!` when prop is sent as name="Charlie"
test("Checking h2 content in Body", () => {

    let wrapper = shallow(<BodyComponent name={"Charlie"}/>)

    expect(wrapper.find('h2').text()).toBe("Hello Charlie!!")

})