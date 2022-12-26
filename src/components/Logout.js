import React from 'react'
import {auth} from '../firebase'
import styled from 'styled-components'

const Logout = () => {
    const signOut = ()=>{
        signOut(auth)
    };

    // const getOut=()=>{
    //     auth.signOut()
    // }
  return (
    <Button>
        <button onClick={() => auth.signOut()}>LogOut</button>
    </Button>
  )
}

export default Logout

const Button=styled.div`

`