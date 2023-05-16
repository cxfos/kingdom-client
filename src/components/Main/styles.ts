import styled, {ThemeProps, css} from 'styled-components';
import theme from 'styles/theme';
import {MainProps} from '.';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

export const Wrapper = styled.main`
  ${({theme}: ThemeProps<DefaultTheme> & MainProps) => css`
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: ${theme.layers.base};
  `};
`;