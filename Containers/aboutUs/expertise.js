import React from 'react'
import Data from "../../Data/expertise.json";

export function Expertise({ children }) {

    return (
        <div>
            {Data.map((item, index) => (
                <div key={item.title} name={item.id}>
                    <h2
                        style={{ marginTop: "0", marginBottom: "40px" }}
                        key={item.title}
                    >
                        {item.title}
                    </h2>

                    {item.subSections.map((item, index) => (
                        <div key={index}>

                            <h3 name={item.id} key={item.title}>
                                {item.title}
                            </h3>
                            {item.paragraphs.map((item, index) => (
                                <div key={index} className="">
                                    <p className="body" key={index}>{item.paragraph}</p>
                                    {item.services ? <ul>{item.services.map((item, index) => (<li key={index}>{item.service}</li>))}</ul> : null}
                                </div>
                            ))}
                        </div>
                    ))}

                </div>
            ))}
        </div>
    )
}