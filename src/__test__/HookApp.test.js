import {shallow } from 'enzyme';
import HookApp from '../HookApp';

describe('Pruebas en <HookApp/>', () => {
    test('debe renderizarse', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
})