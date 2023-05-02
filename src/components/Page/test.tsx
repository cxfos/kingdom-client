import {render, screen, fireEvent} from '@testing-library/react';
import {Page} from '.';

describe('<Page />', () => {

    test('Should render successufully', () => {
        render(<Page />);

        expect(screen.getAllByRole('article').length).toBe(1);
        expect(screen.getAllByRole('banner').length).toBe(1);
        expect(screen.getAllByRole('heading').length).toBe(2);
        expect(screen.getAllByRole('button').length).toBe(2);
        expect(screen.getAllByRole('link').length).toBe(3);
        expect(screen.getAllByRole('list').length).toBe(1);
        expect(screen.getAllByRole('listitem').length).toBe(2);
    });

    test('Should Sign up', () => {
        render(<Page />);

        expect(screen.queryAllByText('Jane Doe').length).toBe(0);

        fireEvent.click(screen.getByText('Sign up'));

        expect(screen.queryAllByText('Jane Doe').length).toBe(1);
    });

    test('Should Log in', () => {
        render(<Page />);

        expect(screen.queryAllByText('Jane Doe').length).toBe(0);

        fireEvent.click(screen.getByText('Log in'));

        expect(screen.queryAllByText('Jane Doe').length).toBe(1);
    });

    test('Should Log out', () => {
        render(<Page />);

        fireEvent.click(screen.getByText('Log in'));

        expect(screen.queryAllByText('Jane Doe').length).toBe(1);

        fireEvent.click(screen.getByText('Log out'));

        expect(screen.queryAllByText('Jane Doe').length).toBe(0);
    });
});
