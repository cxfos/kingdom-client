import styled, {ThemeProps, css} from 'styled-components';
import theme from 'styles/theme';

type Theme = typeof theme;
interface DefaultTheme extends Theme {}

export type CheckedProps = {
    checked: boolean,
};

export type HamburguerProps = {
    for: string,
    checked: boolean,
};

export const Header = styled.header`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        background-color: linear-gradient(180deg, ${theme.colors.mainBg}, transparent);
        position: sticky;
        top: 0;
        width: 100%;
        a {
            text-decoration: none;
        }
    `};
`;

export const LogoWrapper = styled.div`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        padding: ${theme.spacings.xxsmall};
        display: inline-block;
        align-items: center;
        justify-content: space-between;

        svg, img {
            display: inline-block;
            vertical-align: top;
        }
    `};
`;

export const NavBar = styled.nav`
    ${({theme, checked}: ThemeProps<DefaultTheme> & CheckedProps) => css`
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: ${theme.colors.mainBg};
        overflow: hidden;

        ${checked 
        ? css`
            max-height: 100%;
        ` 
        : css`
            max-height: 0;
        `}
        transition: max-height .5s ease;

        @media (min-width: 768px) {
            max-height: none;
            top: 0;
            position: relative;
            float: right;
            width: fit-content;
            background-color: linear-gradient(180deg, ${theme.colors.mainBg}, transparent);
        }
    `};
`;

export const SideMenuToggle = styled.input.attrs({type: 'checkbox'})`
    display: none;
`;

export const Hamburguer = styled.label`
    ${({theme, checked}: ThemeProps<DefaultTheme> &  HamburguerProps) => css`
        cursor: pointer;
        float: right;
        padding: ${theme.spacings.xxlarge} ${theme.spacings.small};
        span {
            background: ${theme.colors.main};
            display: block;
            height: 2px;
            position: relative;
            width: 24px;
            ${checked && css`
                background: transparent;
            `}
        }
        span::before, span::after {
            background: ${theme.colors.main};
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            transition: all .2s ease-out;
            width: 100%;
        }
        span::before {
            top: 5px;
            ${checked && css`
                transform: rotate(-45deg);
                top:0;
            `}
        }
        span::after {
            top: -5px;
            ${checked && css`
                transform: rotate(45deg);
                top:0;
            `}
        }
        @media (min-width: 768px) {
            display: none;
        }
    `};
`;

export const Menu = styled.ul`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        list-style: none;
        a {
            display: block;
            padding: ${theme.spacings.large} ${theme.spacings.xxsmall};
            color: ${theme.colors.primary};
        }
        a:hover{
            color: ${theme.colors.primaryBg};
            svg {
                fill: ${theme.colors.primaryBg};
            }
        }
        @media (min-width: 768px) {
            a:hover{
                background-color: transparent;
            }
        }
        @media (min-width: 920px) {
            a{
                padding: ${theme.spacings.large} ${theme.spacings.small};
            }
        }
    `};
`;

export const MenuItem = styled.li`
    @media (min-width: 768px) {
        float: left;
    }
`;

export const MenuItemWithSubMenu = styled.li`
    :hover div.SubMenuContent,
    :hover div.SubMenuArrowUp {
        display: block;
    }
    :hover div.SubMenuArrowDown {
        display: none;
    }
    @media (min-width: 768px) {
        float: left;
        :hover div.SubMenuArrowDown {
            display: block;
        }
        :hover div.SubMenuArrowUp {
            display: none;
        }
    }
`;

export const SubMenuButton = styled.a`
    div.SubMenuButton {
        display: block;
    }
`;

export const SubMenuArrowUp = styled.div`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        width: ${theme.spacings.xxsmall};
        height: ${theme.spacings.xxsmall};
        float: right;
        display: none;
        svg {
            fill: ${theme.colors.main};
        }
    `};
`;

export const SubMenuArrowDown = styled.div`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        width: ${theme.spacings.xxsmall};
        height: ${theme.spacings.xxsmall};
        float: right;
        svg {
            fill: ${theme.colors.main};
        }
    `};
`;

export const SubMenuContent = styled.div`
    ${({theme}: ThemeProps<DefaultTheme>) => css`
        background-color: ${theme.colors.secondaryBg};
        width: 100%;
        z-index: ${theme.layers.menu};
        padding: ${theme.spacings.small} 0 ;
        display: none;
        a {
            color: ${theme.colors.secondary};
            text-decoration: none;
            padding: 0;
            margin: 10px 0;
            text-align: center;
        }
        @media (min-width: 768px) {
            padding: 20px 0 ;
            display: none;
            position: fixed;
            min-width: 200px;
            max-width: 300px;
            background-color:  ${theme.colors.mainBg};
            a {
                color: ${theme.colors.main};
            }
        }
    `};
`;