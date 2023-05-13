import {render, screen} from '@testing-library/react';
import Logo from '.';

describe('<Logo />', () => {

    test('Should render successufully', () => {
        render(<Logo />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});