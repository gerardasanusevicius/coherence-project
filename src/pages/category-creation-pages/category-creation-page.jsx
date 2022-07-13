import React from 'react';
import NavigationLink from '../../components/navigation-link';

const CategoryCreationPage = () => (
    <>
    <NavigationLink to="/field-creation">Create a New Field</NavigationLink>
    <NavigationLink to="/specialisation-creation">Create a New Specialisation</NavigationLink>
    <NavigationLink to="/occupation-creation">Create a New Occupation</NavigationLink>
    </>
);

export default CategoryCreationPage;
