import React, { Component } from 'react'
import ContentLoader from "react-content-loader";

export default class HomeLoader extends Component {
    
    render() {

        return (
            <div className="text-center">
        <ContentLoader 
            speed={1}
            width={1600}
            height={40}
            backgroundColor="#dcdedd"
            foregroundColor="#9c9c9c"
        >

            <rect x="0" y="0" rx="0" ry="0" width="1600" height="40" />
            
        </ContentLoader>

                <div className="mt-5 pt-4">
                    <ContentLoader 
                        speed={1}
                        width={1080}
                        height={900}
                        backgroundColor="#dcdedd"
                        foregroundColor="#9c9c9c"
                    >
        
                        <rect x="10" y="20" rx="5" ry="5" width="200" height="40" />
                        <rect x="250" y="20" rx="5" ry="5" width="200" height="40" />
                        <rect x="490" y="20" rx="5" ry="5" width="200" height="40" />
                        <rect x="740" y="20" rx="5" ry="5" width="200" height="40" />


                        <rect x="10" y="100" rx="5" ry="5" width="250" height="60" />
                        <rect x="10" y="200" rx="5" ry="5" width="250" height="60" />
                        <rect x="10" y="300" rx="5" ry="5" width="250" height="60" />
                        <rect x="10" y="400" rx="5" ry="5" width="250" height="60" />


                        <rect x="300" y="100" rx="5" ry="5" width="550" height="600" />


                        <circle cx="910" cy="250" r="10" />
                        <circle cx="910" cy="300" r="10" />
                        <circle cx="910" cy="350" r="10" />
                        <circle cx="910" cy="400" r="10" />
                    </ContentLoader>

            </div>
            </div>
        )
    }
}

export class CardLoader extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export class ProfileLoader extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="">
                    <ContentLoader 
                        speed={1}
                        width={800}
                        height={600}
                        viewBox="0 0 400 160"
                        backgroundColor="#dcdedd"
                        foregroundColor="#9c9c9c"
                    >
                        <rect x="120" y="20" rx="3" ry="3" width="150" height="20" /> 
                        <rect x="120" y="50" rx="3" ry="3" width="100" height="16" /> 
                        <rect x="0" y="100" rx="3" ry="3" width="410" height="6" /> 
                        <rect x="0" y="116" rx="3" ry="3" width="380" height="6" /> 
                        <rect x="0" y="132" rx="3" ry="3" width="178" height="6" /> 
                        <circle cx="50" cy="50" r="40" />
                    </ContentLoader>
                </div>
            </div>
        )
    }
}
