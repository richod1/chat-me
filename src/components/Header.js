import React from 'react'
import styled from 'styled-components'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SingIn from './SingIn'
import Logout from './Logout'

const Header = () => {
  const [user]= useAuthState(auth);
  
  return (
    <Container>
      <Wrap> 
        <h2>Chat-Me</h2>
        
      </Wrap>
      <Signapp>
        {user?<Logout/>:<SingIn/>}
        {/* <SingIn/> */}
        </Signapp>
    
    </Container>
   
  )
}

export default Header

const Container=styled.div`
display:flex;
width:100%;
height:60px;
background:teal;
justify-content:space-between;
`

const Wrap=styled.div`
display:flex;
align-items:center;
justify-content:space-between;

h2{
  font-size:25px;
  font-weight:bold;
}
`

const Signapp=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin-right:20px;
border-radius:15px;
`