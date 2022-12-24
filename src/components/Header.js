import React from 'react'
import styled from 'styled-components'
import {auth} from '../firebase'
import {useAutState} from 'react-firebase-hooks/auth'
import SingIn from './SingIn'

const Header = () => {
  const [user]= useAutState(auth);
  
  return (
    <Container>
      <Wrap> 
        <h2>Chat-Me</h2>
        <SingIn/>
      </Wrap>
    
    </Container>
   
  )
}

export default Header

const Container=styled.div`
display:flex;
width:100%;
height:60px;
background:teal;
`

const Wrap=styled.div`
display:flex;
align-items:center;
justify-content:center;

h2{
  font-size:25px;
  font-weight:bold;
}
`