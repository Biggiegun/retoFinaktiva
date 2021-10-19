import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {configure, shallow} from 'enzyme';
import {MainContainer} from '../container/MainContainer';


configure({ adapter: new Adapter() });

describe('Pruebas en MainContainer', ()=>{
    let component = null;

    beforeEach(() => {
      component = shallow(<MainContainer />);
    })
    
    afterEach(() => {
      component = null;
    });

    it('Renderizar componente', ()=>{
        expect(component.exists("#output")).toBe(false);
    })
})