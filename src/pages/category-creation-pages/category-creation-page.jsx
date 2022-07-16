import React from 'react';
import NavigationLink from '../../components/navigation-link';

const CategoryCreationPage = () => (
    <>
    <NavigationLink sx={{
      fontSize: { xs: '1rem', md: '2rem', lg: '3rem' },
      textAlign: 'center',
    }}
to="/field-creation">Create a New Field</NavigationLink>
    <NavigationLink sx={{
      fontSize: { xs: '1rem', md: '2rem', lg: '3rem' },
      textAlign: 'center',
    }}
to="/specialisation-creation">Create a New Specialisation</NavigationLink>
    <NavigationLink sx={{
      fontSize: { xs: '1rem', md: '2rem', lg: '3rem' },
      textAlign: 'center',
    }}
to="/occupation-creation">Create a New Occupation</NavigationLink>
    </>
);

export default CategoryCreationPage;
