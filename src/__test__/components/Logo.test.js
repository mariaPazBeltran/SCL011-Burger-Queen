import React from 'react';
import {mount} from 'enzyme';
import Logo from '../../assets/components/Logo';
describe ('<Logo/>', ()=>{
    const logo = mount (<Logo/>);
    // test('Render del componente Logo', ()=>{
    //     expect(Logo.length).toEqual(1);
    // })
    test('Render del titulo',()=>{
        expect(logo.find('.logo-container').text()).toEqual("/ ")
    })
})