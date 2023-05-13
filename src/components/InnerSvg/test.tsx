import {render, screen} from '@testing-library/react';
import InnerSvg from '.';

describe('<InnerSvg />', () => {

    test('Should render successufully', () => {
        render(<InnerSvg />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});