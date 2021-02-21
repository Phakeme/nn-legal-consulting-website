import React from 'react'

const Container = (props) => {
    return (
        <div div className="container mx-auto max-w-6xl max-w-screen-xl mx-6 px-6">
            {props.children}
        </div>
    )
}

export default Container
