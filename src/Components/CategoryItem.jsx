import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position:relative;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({ height: '30vh' })}
`
const Info = styled.div`
position:absolute;
top:0;
bottom:0;
width: 100%;
height:100%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Title = styled.h1`
font-family: 'Times New Roman',  sans-serif;
color:white;
margin-bottom: 20px;
cursor:default;
&:hover{
    color:honeydew;
}`
const Button = styled.button`
border:none;
padding: 10px;
background-color:white;
color:gray;
border-radius:8px;
&:hover{
    background-color: honeydew;
    cursor:pointer
}`
export default function CategoryItem({ item }) {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>

    )
}
