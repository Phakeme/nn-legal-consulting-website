import React from 'react'
import { About } from '../Components'

export function AboutContainer() {
    return (
        <About>
            <About.Container>
                <About.Wrapper>
                    <About.Content>
                        <About.Title>This is the main Section, <br /> <br />all links will lead to corresponding section of the page, <br /><br />like in word Documents.</About.Title>
                    </About.Content>
                    {/* <About.Content>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis odit sunt possimus deserunt nam eligendi, nostrum suscipit totam blanditiis rerum facilis distinctio asperiores quibusdam rem dolorem libero culpa quos! Commodi iusto repellat vitae sed a aspernatur ut tempora labore beatae necessitatibus fugiat, blanditiis reprehenderit. Nam natus accusamus error alias suscipit!.</p>
                        <About.Title style={{ textAlign: 'left' }}>Read more...</About.Title>
                    </About.Content> */}
                </About.Wrapper>
            </About.Container>
        </About>
    )
}