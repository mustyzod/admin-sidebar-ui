import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from './Sidebar';


describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});

describe('Make a screenshot for sidebar', () => {
    test('snapshot renders', () => {
        const component = renderer.create(
            <Router>
                <Sidebar />
            </Router>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});