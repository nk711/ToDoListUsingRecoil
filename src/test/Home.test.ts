import React from "react";
import renderer from 'react-test-renderer';
import { Home } from '../screens/Home'




test('Home page renders correctly', () => {
     const tree = renderer.create(<Home/>).toJSON();
     expect(tree).toMatchSnapshot()
})