import React from 'react'
import Icon5 from '../../images/Roadmap.png'
import {
    RoadmapContainer,
    RoadmapH1,
    RoadmapWrapper,
    RoadmapCard,
    RoadmapIcon
} from '../Roadmap/RoadmapElements'

const Roadmap = () => {
    return (
        <RoadmapContainer id='roadmap'>
            <RoadmapH1>Roadmap</RoadmapH1>
            <RoadmapWrapper>
                <RoadmapCard>
                    <RoadmapIcon src={Icon5} />
                </RoadmapCard>
            </RoadmapWrapper>
        </RoadmapContainer>
    )
}

export default Roadmap
