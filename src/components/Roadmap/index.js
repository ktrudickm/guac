import React from 'react'
import Icon1 from '../../images/avocado.png'
import Icon2 from '../../images/avocado.png'
import Icon3 from '../../images/avocado.png'
import Icon4 from '../../images/avocado.png'

import {
RoadmapContainer,
RoadmapH1,
RoadmapWrapper,
RoadmapCard,
RoadmapIcon,
RoadmapH2,
RoadmapP
} from './RoadmapElements'

const Roadmap = () => {
    return (
        <RoadmapContainer id='features'>
            <RoadmapH1>Features</RoadmapH1>
            <RoadmapWrapper>
                <RoadmapCard>
                    <RoadmapIcon src={Icon1} />
                    <RoadmapH2>Governance Rights</RoadmapH2>
                    <RoadmapP>$Guac holders receive exclusive governance right. This includes the ability to submit Avocado improvement Protocols (AIP) and receive rewards for community-building activities.</RoadmapP>
                </RoadmapCard>
                <RoadmapCard>
                    <RoadmapIcon src={Icon2} />
                    <RoadmapH2>Product Discounts</RoadmapH2>
                    <RoadmapP>Spend $Guac to receive discounts on al services on the platform. These will include access to private pits and financial courses.</RoadmapP>
                </RoadmapCard>
                <RoadmapCard>
                    <RoadmapIcon src={Icon3} />
                        <RoadmapH2>Staking Rewards</RoadmapH2>
                        <RoadmapP>Stake $Guac with our partners to receive passive rewards on your $Guac tokens.</RoadmapP>
                </RoadmapCard>
                <RoadmapCard>
                    <RoadmapIcon src={Icon4} />
                        <RoadmapH2>Become Verified</RoadmapH2>
                        <RoadmapP>$Guac users become Avocado verified on the platform. This community distinction is marked by an Avocado icon after their username.</RoadmapP>
                </RoadmapCard>
            </RoadmapWrapper>
        </RoadmapContainer>
    )
}

export default Roadmap
