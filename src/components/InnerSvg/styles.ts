import styled, {ThemeProps, css} from 'styled-components';
import theme from 'styles/theme';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

export const Wrapper = styled.div`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        color: ${theme.colors.main};
        svg {
            fill: ${theme.colors.main};
            stroke: ${theme.colors.mainBg};
        }
    `};
`;