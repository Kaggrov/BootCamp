import Enzyme ,{shallow} from 'enzyme'
import Article from './Article'
import ArticleChild from './ArticleChild'


describe('Article Component',()=>{
    test('render',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.exists()).toBe(true)
        console.log(wrapper.debug)
    })

    test('render2',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.find('.App').length).toEqual(1)
        console.log(wrapper.debug)
    })

    test('render3',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.contains(<div className='App'>Article</div>)).toBe(true)
        console.log(wrapper.debug)
    })

    test('render4',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.find('.myCss').at(0).key()).toBe("1")
        console.log(wrapper.debug)
    })

    test('test1',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.find('ul').children().length).toBe(3)
        console.log(wrapper.debug)
    })

    test('test2',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.find('.myCss2').childAt(0).type()).toBe('span')
        console.log(wrapper.debug)
    })

    // test('test3',()=>{

    //     let wrapper = shallow(<Article/>)
    //     wrapper.find('button').simulate('click')
    //     expect(wrapper.find('click1').length).toBe(1)
    //     console.log(wrapper.debug)
    // })

    test('test4',()=>{

        let wrapper = shallow(<Article/>)
        expect(wrapper.find('ArticleChild').dive().find('.App').length).toEqual(1);
        
        console.log(wrapper.debug())
    })

    test('test5',()=>{

        let wrapper = shallow(<ArticleChild/>)
        expect(wrapper).toMatchSnapshot();//to monitor changes in component for testing
    })
})