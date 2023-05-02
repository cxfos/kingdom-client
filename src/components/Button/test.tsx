import {render, screen, fireEvent} from '@testing-library/react';
import {Button} from '.';

describe('<Button />', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should render successfuly', () => {
        render(<Button label={'test button'} />);

        expect(screen.getAllByRole('button').length).toBe(1);
        expect(screen.getByText('test button')).toBeInTheDocument();
        expect(screen.getByText('test button')).toHaveClass('storybook-button');
        expect(screen.getByText('test button')).toHaveClass('storybook-button--secondary');
        expect(screen.getByText('test button')).toHaveClass('storybook-button--medium');
    });

    test('Should render as primary', () => {
        render(<Button label={'test button'} primary />);

        expect(screen.getAllByRole('button').length).toBe(1);
        expect(screen.getByText('test button')).toHaveClass('storybook-button--primary');
    });

    test('Should render as size small', () => {
        render(<Button label={'test button'} size={'small'} />);

        expect(screen.getAllByRole('button').length).toBe(1);
        expect(screen.getByText('test button')).toHaveClass('storybook-button--small');
    });

    test('Should render with bg color #abc', () => {
        render(<Button label={'test button'} backgroundColor='#abc' />);

        expect(screen.getAllByRole('button').length).toBe(1);
        expect(screen.getByText('test button')).toHaveStyle('background-color: #abc;');
    });

    test('Should call onClick', () => {
        render(<Button label={'test'} onClick={onClickMock}/>);

        fireEvent.click(screen.getByText('test'));

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

});