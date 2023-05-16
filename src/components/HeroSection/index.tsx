import React, { useState } from 'react';
import Image from 'next/image';
import useDimensions from 'react-cool-dimensions';

import {Button} from 'components/Button';
import arrayCeil from 'utils/arrayCeil';
import * as S from './styles';

export type HeroSectionProps = {}

const sizeTransformation: Record<string, number> = {
  large: 1000,
  medium: 750,
  small: 500,
  thumbnail: 181
};

export const HeroSection = () => {
  const [heroImage, setHeroImage] = useState('shutterstock_578677744_437b6540a8.jpg');
  const imageSizes = [181, 500, 750, 1000];

  const { observe } = useDimensions({
      onResize: ({ observe, unobserve, width }) => {
          setHeroImage(`${Object.keys(sizeTransformation).find(key => sizeTransformation[key] === arrayCeil(imageSizes, width))}_shutterstock_578677744_437b6540a8.jpg`);

          unobserve(); // To stop observing the current target element
          observe(); // To re-start observing the current target element
      },
  });

  return (
    <S.Section ref={observe} >
          <Image
              src={`http://localhost:1337/uploads/${heroImage}`}
              alt="Noite obscura com lua gigante iluminando a estrada em direção a cidade ao fundo"
              fill
          />
          <S.InfoWrapper>
              <S.H1>Bem vindo a <br />
                  <span className="text-primary">The kingdom by Night</span>
              </S.H1>
              <S.P>Uma cronica LARP de Vampiro: A Máscara</S.P>
              <Button label={'Saiba Mais'} primary />
          </S.InfoWrapper>
      </S.Section>
  );
};
