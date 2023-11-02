import React from 'react'
import {shallow} from 'enzyme';

import HookApp from '../HookApp.js'

describe('Pruebas en <HookApp />', () => {
    
    test('Se debe mostrar <HookApp /> correctamente.', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })

})
