import styled, {ThemeProps, css} from 'styled-components';

import theme from 'styles/theme';
import {Props} from '.';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

const sizeModifier = {
    normal: () => css`
        width: 11rem;
    `,
    large: () => css`
        width: 20rem;
    `
};

export const Wrapper = styled.div<Partial<Props>>`
    ${({theme, size}: ThemeProps<DefaultTheme> & Partial<Props>) => css`
        color: ${theme.colors.main};
        ${!!size && sizeModifier[size]};
        svg, img {
            width: 100%;
        }
    `};
`;