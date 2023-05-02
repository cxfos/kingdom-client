import {render, screen} from '@testing-library/react';
import {AppProps} from 'next/app';
import App from 'pages/_app';

describe('App', () => {
    const appProps: AppProps = {
        Component: (props: any) => <><div {...props}></div></>,
        pageProps: { 'data-testid': 'test-component' }
    } as unknown as AppProps;

    it('should render successufully', () => {
        render(App(appProps));

        expect(screen.getByTestId('test-component')).toBeInTheDocument();
      });
});
