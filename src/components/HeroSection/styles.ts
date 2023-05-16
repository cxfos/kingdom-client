import styled, {ThemeProps, css} from 'styled-components';

import theme from 'styles/theme';
import { HeroSectionProps } from '.';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

export const Section = styled.section`
${({theme}: ThemeProps<DefaultTheme> & HeroSectionProps) => css`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
        background-color: ${theme.colors.mainBg};
        img {
            opacity: .60;
            object-fit: cover;
        }
    `};
`;

export const InfoWrapper = styled.div`
${({theme}: ThemeProps<DefaultTheme> & HeroSectionProps) => css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 ${theme.spacings.xsmall};
    `};
`;

export const H1 = styled.h1`
${({theme}: ThemeProps<DefaultTheme> & HeroSectionProps) => css`
        text-align: center;
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.xxlarge};
        color: ${theme.colors.main};
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    `};
`;

export const P = styled.p`
${({theme}: ThemeProps<DefaultTheme> & HeroSectionProps) => css`
        text-align: center;
        font-size: ${theme.font.sizes.large};
        color: ${theme.colors.main};
        opacity: .90;
        margin-top: ${theme.spacings.xxsmall};
    `};
`;
