import styled from "styled-components/macro";

export const FooterWrapper = styled.footer`
  background-color: #0f0028; /* theme Primary */
  color: #f8f8f8;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    margin: auto;
    max-width: 110rem;
    @media (max-width: 1150px) {
      padding: 7rem 6rem 7rem 3rem ;
    }
`;
export const Identity = styled.div`
    margin-top: 2rem;
`

export const Logo = styled.img`
  @media (max-width: 768px) {
    height:30px;
    width: auto;
  }
`;

export const Slogan = styled.h1`
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size:1.8rem
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
  grid-gap: 1.5rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ColHeader = styled.h2`
  margin-bottom: .8rem;
`;

export const ColText = styled.p`
  font-size: 1rem;
`;

export const Link = styled.a`
    color: white;
    transition: all 0.5;
    &:hover {
      text-decoration: none;
    }
`;

export const UsefulLinks = styled.div`
    display: flex;
    column-gap: 2rem;
    margin-top: 3rem;
    @media (max-width: 768px) {
    column-gap: 5rem;
    flex-wrap: wrap;
    align-items: center;
  }
`;