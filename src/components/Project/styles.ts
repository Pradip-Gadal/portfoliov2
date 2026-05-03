import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    gap: 1.5rem;
    padding: 1rem;
    overflow: hidden;
    align-items: stretch;

    /* Make wrappers (ScrollAnimation div, anchor) fill the grid cell so .project can stretch */
    > * {
      height: 100%;
      display: flex;
    }
    > * > a,
    > * > div {
      width: 100%;
      height: 100%;
    }

    .project{
      padding: 1.4rem 1.4rem;
      background-color: #2b2b2b;
      border-radius: 1rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 1.4rem;
        svg {
          width: 3.2rem;
          height: 3.2rem;
        }
        .project-links{
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        a > img,
        .project-links > img {
          width: 2.4rem;
        }
      }

      h3{
        margin-bottom: 0.8rem;
        font-size: 1.7rem;
      }

      p{
        letter-spacing: 0.06rem;
        margin-bottom: 1.2rem;
        font-size: 1.3rem;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.8rem 1.2rem;
          font-size: 1.1rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 1200px){
    .projects{
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`