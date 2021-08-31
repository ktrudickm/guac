import React from 'react'
import Icon1 from '../../images/avocado.png'
import Icon2 from '../../images/avocado.png'
import Icon3 from '../../images/avocado.png'
import Icon4 from '../../images/avocado.png'

import {
FeaturesContainer,
FeaturesH1,
FeaturesWrapper,
FeaturesCard,
FeaturesIcon,
FeaturesH2,
FeaturesP
} from './FeaturesElements'

const Features = () => {
    return (
        <FeaturesContainer id='features'>
            <FeaturesH1>Features</FeaturesH1>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesIcon src={Icon1} />
                    <FeaturesH2>Governance Rights</FeaturesH2>
                    <FeaturesP>$Guac holders receive exclusive governance right. This includes the ability to submit Avocado improvement Protocols (AIP) and receive rewards for community-building activities.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon2} />
                    <FeaturesH2>Product Discounts</FeaturesH2>
                    <FeaturesP>Spend $Guac to receive discounts on al services on the platform. These will include access to private pits and financial courses.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon3} />
                        <FeaturesH2>Staking Rewards</FeaturesH2>
                        <FeaturesP>Stake $Guac with our partners to receive passive rewards on your $Guac tokens.</FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src={Icon4} />
                        <FeaturesH2>Become Verified</FeaturesH2>
                        <FeaturesP>$Guac users become Avocado verified on the platform. This community distinction is marked by an Avocado icon after their username.</FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
