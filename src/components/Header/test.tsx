import {render, screen, fireEvent} from '@testing-library/react';
import {Header} from '.';

describe('<Header />', () => {
    const onLoginMock = jest.fn();
    const onLogoutMock = jest.fn();
    const onCreateAccountMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render with No User', () => {
        render(<Header onLogin={onLoginMock} onLogout={onLogoutMock} onCreateAccount={onCreateAccountMock} />);

        expect(screen.getAllByRole('banner').length).toBe(1);
        expect(screen.getAllByRole('heading').length).toBe(1);
        expect(screen.getAllByRole('button').length).toBe(2);
        expect(screen.getByText('Log in')).toBeInTheDocument();
        expect(screen.getByText('Sign up')).toBeInTheDocument();
    });

    test('Should render with User', () => {
        render(<Header user={{name: 'John'}} onLogin={onLoginMock} onLogout={onLogoutMock} onCreateAccount={onCreateAccountMock} />);

        expect(screen.getAllByRole('banner').length).toBe(1);
        expect(screen.getAllByRole('heading').length).toBe(1);
        expect(screen.getAllByRole('button').length).toBe(1);
        expect(screen.getByText('Log out')).toBeInTheDocument();
    });

    test('Should call onLogin', () => {
        render(<Header onLogin={onLoginMock} onLogout={onLogoutMock} onCreateAccount={onCreateAccountMock} />);

        fireEvent.click(screen.getByText('Log in'));

        expect(onLoginMock).toHaveBeenCalledTimes(1);
    });

    test('Should call onLogout', () => {
        render(<Header user={{name: 'John'}} onLogin={onLoginMock} onLogout={onLogoutMock} onCreateAccount={onCreateAccountMock} />);

        fireEvent.click(screen.getByText('Log out'));

        expect(onLogoutMock).toHaveBeenCalledTimes(1);
    });

    test('Should call onCreateAccount', () => {
        render(<Header onLogin={onLoginMock} onLogout={onLogoutMock} onCreateAccount={onCreateAccountMock} />);

        fireEvent.click(screen.getByText('Sign up'));

        expect(onCreateAccountMock).toHaveBeenCalledTimes(1);
    });
});