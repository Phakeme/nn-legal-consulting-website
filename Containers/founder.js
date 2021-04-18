import React from 'react'
import { Founder } from '../Components'

export function FounderContainer() {
    return (
        <Founder>
            <Founder.Container>
                <Founder.Quote>
                    <Founder.ImageWrapper />
                    <div className="quote-section">
                        <h2 className="quote">Intentionality in putting ourselves in a position where we stand a chance of triumph is sometimes all a victory takes!</h2>
                        <p> <strong>Mbali Ngubo  </strong> Director</p>
                    </div>
                </Founder.Quote>
            </Founder.Container>
        </Founder >
    )
}