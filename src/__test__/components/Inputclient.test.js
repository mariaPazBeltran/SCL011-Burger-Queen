import React from 'react';
import {mount} from 'enzyme';
import Inputclient from '../../assets/components/Inputclient';

describe('<Inputclient/>', ()=>{
    const Inputclient = mount (<Inputclient/>);
    test('Render del componente Inputclient', ()=>{
        expect(Inputclient.length).toEqual(1);
    })
    test('Render del titulo',()=>{
        expect(Inputclient.find('.input-container').text()).toEqual("Cliente")
    })
})