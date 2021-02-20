import React from 'react'

const Hero = () => {
    return (
        <main className="text-white max-w-6xl max-w-screen-xl mx-auto h-625">
            <div className="grid grid-flow-col grid-cols-2 gap-4 h-full">
                <div className="text-white grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
                    <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="bg-blueDark transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="bg-white">
                    <h1 className=""> Right Section Main</h1>
                </div>
            </div>
        </main>
    )
}

export default Hero
