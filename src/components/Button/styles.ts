import styled, {ThemeProps, css} from 'styled-components';

import theme from 'styles/theme';
import {ButtonProps} from '.';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

const sizeModifier = {
    small: () => css`
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    `,
    medium: () => css`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    `,
    large: () => css`
        font-size: ${theme.font.sizes.large};
        padding: ${theme.spacings.small} ${theme.spacings.medium};
    `
};

const ordinalModifier = {
    primary: () => css`
        color: ${theme.colors.primary};
        background-color: ${theme.colors.primaryBg};
        :hover {
            color: ${theme.colors.red};
        }
    `,
    secondary: () => css`
        color: ${theme.colors.secondary};
        background-color: ${theme.colors.secondaryBg};
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        :hover {
            color: ${theme.colors.red};
        }
    `
};

export const Button = styled.button`
    ${({theme, primary, size}: ThemeProps<DefaultTheme>& Partial<ButtonProps>) => css`
        color: ${theme.colors.main};
        font-family: ${theme.font.family};
        font-weight: ${theme.font.bold};
        border: 0;
        border-radius: ${theme.border.radius};
        cursor: pointer;
        display: inline-block;
        line-height: 1;

        ${!!size && sizeModifier[size]};

        ${primary && ordinalModifier.primary};
        ${!primary && ordinalModifier.secondary};
    `};
`;