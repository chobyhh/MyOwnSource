import React from 'react';
import { useState } from 'react';
import styled from "styled-components";


const Vote = (props) => {
    
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    
    const handleplusA = () => {
        setCountA(countA+1)
    }
    const handleplusB = () => {
        setCountB(countB+1)
    }

    const sum = countA + countB
    const perA = Math.round(countA/sum*100)
    const perB = Math.round(countB/sum*100)
    // const 
    return (
        <>
        <p>
           {countA} 
           <button style={{margin : "10px"}} onClick={handleplusA}>A버튼</button>
        </p>
        <p>
           {countB} 
           <button style={{margin : "10px"}} onClick={handleplusB}>B버튼</button>
        </p>

        {/* <p>{sum}</p> */}
        <p>A 퍼센트 {perA}%</p>
        <p>B 퍼센트 {perB}%</p>
        <Box style={{height : "100vh", margin : "0", background: `linear-gradient(90deg, #3498db ${perA}%, #ffffff ${perA}%)`}}>
        </Box>
        </>
    );
};




const Box = styled.div`
    height: 100vh;
    margin: 0;
    background: linear-gradient(90deg, #3498db 50%, #ffffff 50%);

`


export default Vote;