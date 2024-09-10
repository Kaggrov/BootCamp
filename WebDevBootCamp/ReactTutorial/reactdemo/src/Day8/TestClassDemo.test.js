import Enzyme ,{shallow} from 'enzyme'
import TestClassDemo from './TestClassDemo'

describe('Class Component',()=>{
    test('test 1',()=>{

        let wrapper = shallow(<TestClassDemo/>)
        expect(wrapper.instance().add(2,2)).toBe(4)
        console.log(wrapper.debug())
        console.log("Helllo")
    })

    test('test 2',()=>{
        jest.spyOn(TestClassDemo.prototype,'componentDidMount');
        shallow(<TestClassDemo/>)
        expect(TestClassDemo.prototype.componentDidMount).toHaveBeenCalled()
    })

    test('test 3',()=>{
        let wrapper = shallow(<TestClassDemo/>)
        expect(wrapper.state()).toEqual({number:8})
    })

    test('test 4',()=>{
        
        let wrapper = shallow(<TestClassDemo/>)

        let inp = wrapper.find('input').props();
        let matchWith = {
            type:'text',
            value:'hello',
            id:'name',
            name:'myName'
        }

        expect(inp).toEqual(matchWith)
    })


})