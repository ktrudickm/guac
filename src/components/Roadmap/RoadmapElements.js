import styled from 'styled-components'

export const RoadmapContainer = styled.div`
    height: 800px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    margin-top: -150px;
    padding-bottom: 100px;

    @media screen and (max-width: 768px) {
        height: 300px;
    }

    @media screen and (max-width: 480px) {
        height: 200px;
    }
`

export const RoadmapWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const RoadmapCard = styled.div`
    width: 100%;
    display: flex;
    height: 320px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const RoadmapIcon = styled.img`
    width: 100%;
    margin-bottom: 150px;
    border: 2px #fff solid;
    border-radius: 10px;
`

export const RoadmapH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 5px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`