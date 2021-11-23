import styled from "styled-components"

const Container = styled.div`
height:33px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size:14px;
font-weight: 500;
`

export default function Announcement() {
    return (
        <Container>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, molestiae!
        </Container>
    )
}
