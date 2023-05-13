import {useEffect, useState} from 'react';

import * as S from './styles';
import InnerSvg from 'components/InnerSvg';

export type Props = {
  url: string,
  alternativeText: string,
  size?: 'normal' | 'large'
};

const Logo = ({url, alternativeText, size = 'normal'}: Props) => {
  const [svgContent, setSvgContent] = useState('');
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    let parsedUrl: URL;
    if (url) {

      if (url.startsWith('http')) {
        parsedUrl = new URL(url);
      } else {
        const originUrl = new URL(window.location.href);
        parsedUrl = new URL(url, originUrl.origin);
      }

      if(parsedUrl.pathname.toLowerCase().endsWith('.svg')) {
        fetch(parsedUrl).then(res => res.text()).then(setSvgContent);
      } else {
        setImgSrc(url);
      }
      
    }
  }, [url]);
  
  return (
  <S.Wrapper size={size} >
    {svgContent && <InnerSvg svgFileContent={svgContent} alternativeText={alternativeText} />}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {imgSrc && <img src={imgSrc} alt={alternativeText} />}
  </S.Wrapper>
  );
}
;

export default Logo;