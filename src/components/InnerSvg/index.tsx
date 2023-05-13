import * as S from './styles';
import {sanitize} from 'dompurify';

type Props = {
  svgFileContent: string,
  alternativeText?: string
};

const InnerSvg = ({svgFileContent, alternativeText}: Props) => (
  <S.Wrapper title={alternativeText} dangerouslySetInnerHTML={{__html: sanitize(svgFileContent)}} />
);

export default InnerSvg;