import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';
import {Footer} from '../components/Footer';


configure({ adapter: new Adapter() });

describe('Pruebas en <Footer/>',()=>{
    test('Debe mostrarse correctamente',()=>{

        const wrapper = shallow(<Footer/>)

        expect(wrapper).toMatchSnapshot();
    })
})
