import { EmailOutlined, Facebook, Instagram, MapOutlined, Phone, PostAdd, Room, Twitter, YouTube } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"


const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
${mobile({ flexDirection: 'column' })}
`
const Left = styled.div`

flex:1;
display: flex;
flex-direction:column;
margin: 20px;
padding: 20px;`


const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: 'none' })}
`

const Title = styled.h3`
margin-top:-60px;
font-weight:900;
margin-bottom: 30px;`

const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;

flex-wrap:wrap;

 `

const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
cursor:pointer;
&:hover{
    color:navy;
    zoom:2;
    font-weight:bold;
}
`

const Right = styled.div`
flex:1;
padding: 20px;
${mobile({ backgroundColor: '#ffffff' })}`

const Logo = styled.h1``

const Desc = styled.p`
margin: 20px 0;
letter-spacing:1px;
font-weight: normal;`
const SocialContainer = styled.div`
display: flex;`
const SocialIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 40px;
border-radius:50%;
margin-right: 20px;
color:white;
cursor:pointer;
background-color:#${props => props.color};`

const ContactItem = styled.div`
width:100%;
margin-bottom: 20px;
display: flex;
align-items: center;
font-weight:700;`

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>Logo </Logo>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non qui inventore quod deleniti, quibusdam eius sed odio? Omnis qui ipsam est perferendis neque eum pariatur aspernatur ex dicta sed vero reiciendis sapiente nulla aut, recusandae ducimus quis delectus assumenda veniam, corporis blanditiis labore expedita! Fugit, porro. Odio non dicta dolores nam quis, est quod praesentium debitis? Sint dolorum, vero quam sit provident repellendus facere tempore fugiat sequi nobis velit? Aliquid, quisquam? Porro explicabo commodi optio exercitationem, omnis, odio est dolores ducimus, natus ipsa eius debitis recusandae. Velit, et. Reprehenderit magnam quidem veniam dolor minima beatae, numquam incidunt laudantium earum cum!</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999"><Facebook />
                    </SocialIcon>
                    <SocialIcon color="e66465"><Instagram />
                    </SocialIcon>
                    <SocialIcon color="71DFE7"><Twitter />
                    </SocialIcon>
                    <SocialIcon color="ff1e1e"><YouTube />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Card</ListItem>
                    <ListItem>Popular Itmes</ListItem>
                    <ListItem>Categories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Shoes</ListItem>
                    <ListItem>Tops</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Home</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} />
                    Address: 118 Princess Highway, Arncliffe, NSW 2205
                </ContactItem>
                <ContactItem >
                    <EmailOutlined style={{ marginRight: '10px' }} /> Email: logo@mail.com
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />   +12 345 6789
                </ContactItem>
            </Right>
        </Container>
    )
}
