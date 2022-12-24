import React from 'react'
import GoogleButton from 'react-google-button'
import styled from 'styled-components'
import {auth} from '../firebase'
import {GoogleAuthProvider,signInWithRedirect} from 'firebase/auth'

const SingIn = () => {

  const googleSignIn = ()=>{
    const provider=new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
  };
  return (
    <Container>
      <GoogleButton onClick={googleSignIn}/>
    </Container>
  )
}

export default SingIn

const Container=styled.div`

`