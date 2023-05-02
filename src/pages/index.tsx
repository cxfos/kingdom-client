import Main from 'components/Main';

export default function Home() {
  return <Main 
    logo={{
      src: '/img/next.svg', 
      alt: 'Image containing NextJS Logo'
    }} 
    title='Boilerplate' 
    descriptions={[
      'ReactJS, NextJS and Styled Components', 
      'TypeScript, Jest and Testing Library'
    ]}
    illustration={{
      src: '/img/hero-illustration.svg', 
      alt: 'Ilustration of a developer sitted in front of a screen full of code'
    }} 
  />;
}
