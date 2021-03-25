import React from 'react'
import { Founder } from '../Components'

export function FounderContainer() {
    return (
        <Founder>
            <Founder.Container>
                <Founder.Quote>
                    <Founder.ImageWrapper />
                    <div className="quote-section">
                        <h2 className="quote">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla illo officiis ea sint necessitatibus laboriosam!</h2>
                        <p> <strong>Mbali Ngubo  </strong> Director</p>
                    </div>
                </Founder.Quote>
            </Founder.Container>
        </Founder >
    )
}