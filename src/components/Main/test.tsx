import {render, screen} from '@testing-library/react';
import Main from '.';

describe('<Main />', () => {

    test('Should render successufully', () => {
        render(<Main 
            logo={{
                src: '/img/next.svg', 
                alt: 'Image containing NextJS Logo'
              }} 
              title='Boilerplate' 
              descriptions={[
                'ReactJS, NextJS and Styled Components', 
                'TypeScript, Jest and Testing Library'
              ]}
              illustration={{
                src: '/img/hero-illustration.svg', 
                alt: 'Ilustration of a developer sitted in front of a screen full of code'
              }} 
        />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});