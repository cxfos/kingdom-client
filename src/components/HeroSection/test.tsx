import {render, screen} from '@testing-library/react';
import HeroSection from '.';

describe('<HeroSection />', () => {

    test('Should render successufully', () => {
        render(<HeroSection />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});