import React from 'react'
import { Card } from '../../assets/card/Card'
import kccLogo from '../../assets/images/KCCLogo.png'
import floopLogo from '../../assets/images/FloopLogo.png'
import dropoffLogo from '../../assets/images/DropoffLogo.png'
import easyInfoOnInformatics from '../../assets/images/EasyInfoOnInformaticsLgo.png'
import './Experience.css'

function Experience() {
    return (
        <div className="Experience">
            <div className="row gx-0">
                <div className="col-md-4 justify-content-center">
                    <Card
                    imgSrc={kccLogo}
                    imgAlt="Card Image 1"
                    title="Kids Code Club"
                    description="Software Engineer Internship"
                    buttonText="Learn More"
                    link="kidscodeclub2023"
                    />
                    <Card
                    imgSrc={kccLogo}
                    imgAlt="Card Image 2"
                    title="Kids Code Club"
                    description="Software Engineer Internship"
                    buttonText="Learn More"
                    link="kidscodeclub2022"
                    />
                </div>
                <div className="col-md-4 justify-content-center">
                    <Card
                    imgSrc={floopLogo}
                    imgAlt="Card Image 1"
                    title="Floop Edu"
                    buttonText="Learn More"
                    description="User Experience Design Internship"
                    link="floopedu2022"
                    />
                </div>
                <div className="col-md-4 justify-content-center">
                    
                    <Card
                    imgSrc={easyInfoOnInformatics}
                    imgAlt="Card Image 3"
                    title="Easy Info On Informatics"
                    description="Undergraduate Project"
                    buttonText="Learn More"
                    link="easyinfooninformatics2022"
                    />

                    <Card
                    imgSrc={dropoffLogo}
                    imgAlt="Card Image 1"
                    title="DropOff"
                    description="Hackathon Project"
                    buttonText="Learn More"
                    link="dropoff2020"
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience;