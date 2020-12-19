import React, { useEffect } from "react";
import useData from './hooks/useData';
import RootRouter from "./pages";
import { styled } from "./styles/themes";

function App() {
    const { data } = useData()
    
    useEffect(()=>{
        console.log("테스트테스트",data)
    },[data])

    return (
        <SApp>
            <RootRouter/>
        </SApp>
    )
}

export default App;


const SApp = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`