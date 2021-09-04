import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const BodyContainer = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
  }
`;

export const BodyLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;

h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);

}

p {
    margin-bottom: 2rem
}
`;

export const BodyRight = styled.div`
padding: 1rem 2rem;
display: flex;
justify-conent: center;
align-items: center;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        widht: 90%;
        height: 95%;
    }
}
`;
