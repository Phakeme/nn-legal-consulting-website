import React from 'react'
import { Founder } from '../Components'

export function FounderContainer() {
    return (
        <Founder>
            <Founder.Container>
                <Founder.Quote>
                    <Founder.ImageWrapper />
                    <div className="quote-section">
                        <h3 className="quote">"We are your legal and business minds at work and helping you prepare for and win your cases, and  expand your business is our number one priority."</h3>
                        <p style={{ margin: "0" }}> <strong>Mbali Ngubo  </strong> Director</p>
                        <span>LLB | Paralegal & Commercial Law</span>
                    </div>
                </Founder.Quote>
            </Founder.Container>
        </Founder >
    )
}