import styled from "styled-components"
import Navbar from "../Components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`
width: 100wh;
height:100vh;
background:linear-gradient(rgba(255,255,255, 0.5),rgba(255,255,255, 0.5)), url('https://cdn.pixabay.com/photo/2016/03/09/09/30/woman-1245817_1280.jpg') center;
background-repeat:no-repeat;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white;
${mobile({ width: '75%' })}`

const Title = styled.h1`
font-size: 24px;
font-weight:bold;`

const Form = styled.form`
display: flex;
flex-wrap:wrap;

`


const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding: 10px;`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;`

const Button = styled.button`
width: 40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;`


export default function Register() {
    return (
        <Container>

            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        I agree, with company policy  that I consent to the processing of my data in accodance with the <b>PRIVACY AND POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
