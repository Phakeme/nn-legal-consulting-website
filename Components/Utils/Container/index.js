import React from 'react'
import { ContainerWrapper } from './containerStyles'


const Container = (props) => {
    return (
        <ContainerWrapper>
            {props.children}
        </ContainerWrapper>
    )
}

export default Container
