import React from 'react'
import { Link } from 'react-scroll'
import Hero from './index'

export function HeroLink(props) {
    // console.log(Hero, "RORO")
    return (
        <Link to={props.to} duration={0} spy={true} smooth={true} offset={-90}>
            <Hero.LinkItem style={{
                backgroundImage: props.bg
            }}>
                <Hero.LinkItemText >
                    <div>
                        <h3>{props.label}</h3>
                    </div>
                </Hero.LinkItemText>
            </Hero.LinkItem>
        </Link>
    )
}