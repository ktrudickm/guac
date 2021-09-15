import styled from 'styled-components'

export const FeaturesContainer = styled.div`
    height: 900px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1600px;
        padding-top: 600px;
        padding-bottom: 350px;
    }
`

export const FeaturesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const FeaturesCard = styled.div`
    background: #fff;
    display: flex;
    height: 320px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 400px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        max-height: 400px;
        padding: 20px;
    }
`

export const FeaturesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const FeaturesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 30px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const FeaturesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
`

export const FeaturesP = styled.p`
    font-size: 0.9rem;
    text-align: center;
`