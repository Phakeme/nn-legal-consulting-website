import React from 'react'
import { Union } from '../Components'

export function UnionContainer() {
    return (
        <Union>
            <Union.Container name="UNION">

                <Union.Inner>
                    <Union.Heading>
                        <h2>ASSOCIATIONS</h2>
                    </Union.Heading>
                    <Union.Logos>
                        <Union.Logo>
                            <img
                                style={{ width: "200px" }}
                                src="/vaasa-logo.jpeg"
                                alt="vaasa-logo"

                            />
                        </Union.Logo>
                        <Union.Logo>
                            <h4>MBALENHLE PILLAR FOUNDATION.</h4>
                        </Union.Logo>
                    </Union.Logos>
                </Union.Inner>

            </Union.Container>
        </Union >
    )
}