import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, SecondP, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Where Social Investing Meets Blockchain Technology.</HeroH1>
                <HeroP>An Avocado project powered by Cardano.</HeroP>
                <SecondP>Projected for Q1 2022.</SecondP>
                <HeroBtnWrapper>
                    <Button to='about' smooth={true} duration={1000} onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    >
                        Learn More {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                    {/* <Button to='buy' onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    >
                        Purchase GUAC {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> */}
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
