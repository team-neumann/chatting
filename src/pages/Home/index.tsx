import React from "react"
import { styled } from "../../styles/themes"

function Home() {
    return (
        <SHome>
            <SHeader>Home</SHeader>
        </SHome>
    )
}

export default Home

const SHeader = styled.h1`
    padding: 50px;
    font-size: 36px;
`
const SHome = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    flex-wrap: wrap;
`