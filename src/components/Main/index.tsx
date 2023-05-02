import * as S from './styles';

type Props = {
  logo: {
    src: string,
    alt: string
  },
  title: string,
  descriptions: Array<string>,
  illustration: {
    src: string,
    alt: string
  },
};

const Main = ({logo, title, descriptions, illustration}: Props) => (
  <S.Wrapper>
    <S.Logo {...logo}/>
    <S.Title>{title}</S.Title>
    {descriptions.map((description, index) =>     
      <S.Description key={`description-${index}`}>{description}</S.Description>
    )}
    <S.Illustration {...illustration} />
  </S.Wrapper>
);

export default Main;