import React from 'react'
import { Card } from '../../assets/card/Card'
import kccLogo from '../../assets/images/KCCLogo.png'
import floopLogo from '../../assets/images/FloopLogo.png'
import dropoffLogo from '../../assets/images/DropoffLogo.png'
import easyInfoOnInformatics from '../../assets/images/EasyInfoOnInformaticsLgo.png'

function Experience() {
    return (
        <div className="Experience">
            <div className="row gx-0">
                <div className="col-md-4 justify-content-center">
                    <Card
                    imgSrc={kccLogo}
                    imgAlt="Card Image 1"
                    title="Kids Code Club"
                    description="This is the card description section. You can add more details about the product here"
                    buttonText="Learn More"
                    link="card1"
                    />
                    <Card
                    imgSrc={kccLogo}
                    imgAlt="Card Image 2"
                    title="Kids Code Club"
                    description="This is the card description section. You can add more details about the product here"
                    buttonText="Learn More"
                    link="card2"
                    />
                </div>
                <div className="col-md-4 justify-content-center">
                    <Card
                    imgSrc={floopLogo}
                    imgAlt="Card Image 1"
                    title="Floop Edu"
                    buttonText="Learn More"
                    description="User Experience Designer"
                    link="card3"
                    />
                </div>
                <div className="col-md-4 justify-content-center">
                    <Card
                    imgSrc={dropoffLogo}
                    imgAlt="Card Image 1"
                    title="DropOff"
                    description="hackathon project"
                    buttonText="Learn More"
                    link="card4"
                    />

                    <Card
                    imgSrc={easyInfoOnInformatics}
                    imgAlt="Card Image 3"
                    title="Easy Info On Informatics"
                    description="This is the card description section. You can add more details about the product here"
                    buttonText="Learn More"
                    link="card5"
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;