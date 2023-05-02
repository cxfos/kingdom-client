import {render} from '@testing-library/react';
import Document, {DocumentContext} from 'next/document';
import {mocked} from 'jest-mock';

import MyDocument from 'pages/_document';

jest.mock('next/document');
const documentMocked = mocked(Document);

describe('Document Component getInitialProps', () => {
    const ctx = {
        asPath: '/',
        res: {
            writeHead: jest.fn(),
            end: jest.fn(),
        },
        renderPage: (options: any = {}) => {
            if (typeof options.enhanceApp === 'function') {
            const app = options.enhanceApp(() => <div>App Rendered</div>);
            app();
            }
            return {
            html: <div>App Rendered</div>,
            // eslint-disable-next-line @next/next/no-head-element
            head: (<head><title>App Title</title></head>),
            };
        },
    };

    beforeEach(() => {
        jest.clearAllMocks();
        documentMocked.getInitialProps.mockImplementation(async (ctx: DocumentContext) => ctx.renderPage());
    });

    it('should return finalize html, head and styles in getInitialProps', async () => {
        const result = await MyDocument.getInitialProps(ctx as unknown as DocumentContext);

        expect(result.html).toEqual(<div>App Rendered</div>);
        // eslint-disable-next-line @next/next/no-head-element
        expect(result.head).toEqual(<head><title>App Title</title></head>);
        expect(typeof result.styles).toEqual('object');
    });
});

/** @test {Document Component} */
describe('Document Component', () => {
    it('should render Document components Html', () => {
        const {container} = render(<MyDocument />);

        expect(container).toBeInTheDocument();
    });
});