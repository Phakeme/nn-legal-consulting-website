import React, { useState } from 'react'
import { Data } from './Data'
import About from './index'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Link } from 'react-scroll'

const LinkMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = index => {
        if (isOpen === index) {
            return setIsOpen(null)
        }
        setIsOpen(index)
    }

    return (
        <About.Ul>
            {Data.map((item, index) => (
                <>
                    <Link to={item.to} duration={0} spy={true} smooth={true} offset={-90} key={index} >
                        <About.Heading onClick={() => toggle(index)} key={index}>
                            {item.mainLink}
                            {isOpen === index ? <FaAngleUp /> : <FaAngleDown />}
                        </About.Heading>
                    </Link>
                    {isOpen === index ? <About.Ul>
                        <About.Li>
                            {item.subLinks.map((item, index) => (
                                <Link to={item.to} duration={0} spy={true} smooth={true} offset={-90} key={index} >
                                    <About.SubHeading to={item.to} key={index}>
                                        {item.link}
                                    </About.SubHeading>
                                </Link>
                            ))}
                        </About.Li>
                    </About.Ul> : null}

                </>
            ))}
        </About.Ul>
    )
}

export default LinkMenu
