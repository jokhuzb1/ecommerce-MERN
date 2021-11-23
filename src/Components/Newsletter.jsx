import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display: flex;
align-items: center;
justify-content: center;
letter-spacing:1px;
flex-direction:column;
`
const Title = styled.h1`
font-size:70px;
color:grey;
margin-bottom:20px;`
const Desc = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({ textAlign: 'center' })}

`
const InputContainer = styled.div`
width: 30%;
height: 40px;
background-color: white ;
display: flex;
justify-content: space-between;
border:1px solid lightgray;
${mobile({ width: '80%' })}
`
const Input = styled.input`
border:none;
flex:6;
padding-left: 20px;
`
const Button = styled.button`flex:1;`
const Send = styled.a``

export default function Newsletter() {
    return (
        <div>
            <Container>
                <Title>NewsLetter</Title>
                <Desc>Get notified by weekly and seasonal offers </Desc>
                <InputContainer>
                    <Input placeholder='Email' />

                    <Button><SendOutlined /></Button></InputContainer>
            </Container>
        </div>
    )
}
