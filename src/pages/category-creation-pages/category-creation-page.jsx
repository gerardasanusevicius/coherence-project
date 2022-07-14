import React from 'react';
import NavigationLink from '../../components/navigation-link';

const CategoryCreationPage = () => (
    <>
    <NavigationLink sx={{ fontSize: '3rem' }} to="/field-creation">Create a New Field</NavigationLink>
    <NavigationLink sx={{ fontSize: '3rem' }} to="/specialisation-creation">Create a New Specialisation</NavigationLink>
    <NavigationLink sx={{ fontSize: '3rem' }} to="/occupation-creation">Create a New Occupation</NavigationLink>
    </>
);

export default CategoryCreationPage;
