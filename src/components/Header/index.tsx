import React, {useState} from 'react';

import Logo from 'components/Logo';
import * as S from './styles';
import Link from 'next/link';

export const Header = () => {
  const [checked, setChecked] = useState(false);

  return (
  <S.Header>
    <S.LogoWrapper>
      <Link href={'/'}>
        <Logo 
        url={'img/TKbN_Logo_2023_SVG.svg'} 
        alternativeText={'The Kingdom by Night'} 
        size='large' />
      </Link>
    </S.LogoWrapper>

    <S.SideMenuToggle id="side-menu" checked={checked}/>
    <S.Hamburguer for="side-menu" checked={checked} onClick={() => setChecked(!checked)}>
      <span></span>
    </S.Hamburguer>

    <S.NavBar checked={checked}>
      <S.Menu>
        <S.MenuItemWithSubMenu>
          <S.SubMenuButton href='#'>
            <div className={'SubMenuButton'}>
              {'Primeiros Passos '}
              <S.SubMenuArrowUp className={'SubMenuArrowUp'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
                </svg>
              </S.SubMenuArrowUp>
              <S.SubMenuArrowDown className={'SubMenuArrowDown'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                </svg>
              </S.SubMenuArrowDown>
            </div>
          </S.SubMenuButton>
          <S.SubMenuContent className={'SubMenuContent'}>
              <Link href="#">O que é RPG?</Link>
              <Link href="#">RPG de mesa e Live action (LARP)</Link>
              <Link href="#">O que é Vampiro - A Máscara?</Link>
          </S.SubMenuContent>
        </S.MenuItemWithSubMenu>
        <S.MenuItem><Link href="#">Vampiro</Link> </S.MenuItem>
        <S.MenuItem><Link href="#">O Kingdom</Link></S.MenuItem>
        <S.MenuItem><Link href="#">Galeria</Link></S.MenuItem>
        <S.MenuItem><Link href="#">Calendário</Link></S.MenuItem>
      </S.Menu>
    </S.NavBar>
  </S.Header>
  );
};
