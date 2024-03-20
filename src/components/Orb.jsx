import React from 'react'
import styled, { keyframes } from 'styled-components'
import { UseWindowSize } from '../utils/UseWindowSize';

function Orb() {

    const {width, height} = UseWindowSize()

    console.log(width, height)

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -30vh;
        margin-top: -30vh;
        background: linear-gradient(orange, white, green);
        filter: blur(4px);
        animation: ${moveOrb} 10s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb