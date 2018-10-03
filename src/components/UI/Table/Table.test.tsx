import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Table, { IColumn } from './Table';

configure({ adapter: new Adapter() });

describe('Table component', () => {
    let wrapper:any;
    const columns = [{ field : 'name', header : 'Template', style:{width: '50%'}}, {field : 'modifiedBy', header : 'Modified By', className:'test-class'}] as IColumn[];
    const data = [{
        name : "template - 1",
        modifiedBy : "Test User 1"
    }, {
        name : "template - 2",
        modifiedBy : "Test User 2"
    }];

    beforeEach(() => {
        wrapper = shallow(<Table />)
    })

    it('should render successfully', () => {
        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.type()).toEqual('table');
        expect(wrapper.props().className).toEqual('tm-table');
    })

    it('should render given columns', () => {
        wrapper.setProps({ columns});
        expect(wrapper.find('thead').childAt(0).children().length).toEqual(2);
        expect(wrapper.find('thead').props().className).toEqual('');
    })

    it('should render rows related to given data source', () => {
        wrapper.setProps({ columns, data});
        expect(wrapper.find('tbody').props().style).toEqual({maxHeight : 'none'});
        expect(wrapper.find('tbody').children().length).toEqual(2);
        expect(wrapper.find('tbody').childAt(0).childAt(0).text()).toEqual('template - 1');
        expect(wrapper.find('tbody').childAt(0).childAt(1).text()).toEqual('Test User 1');

        expect(wrapper.find('tbody').childAt(1).childAt(0).text()).toEqual('template - 2');
        expect(wrapper.find('tbody').childAt(1).childAt(1).text()).toEqual('Test User 2');
    })

    it('should set style for given colum', () => {
        wrapper.setProps({ columns, data});
        expect(wrapper.find('thead').childAt(0).childAt(0).props().style).toEqual({width : '50%'})
    })

    it('should set className for given colum and cell', () => {
        wrapper.setProps({ columns, data});
        expect(wrapper.find('thead').childAt(0).childAt(1).props().className).toEqual('test-class');
        expect(wrapper.find('tbody').childAt(0).childAt(1).props().className).toEqual('test-class');
    })

    it('should max height and scroll if needed', () =>  {
        wrapper.setProps({ columns, data, maxHeight:23});
        expect(wrapper.props().className).toEqual('tm-table fixed');
        expect(wrapper.find('thead').props().className).toEqual('has-scroll');
        expect(wrapper.find('tbody').props().style).toEqual({maxHeight : 23});
    })
})