import React from 'react'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Newsletter from '../Components/Newsletter'
import { Add, Remove, RemoveCircleOutline } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: '5px', flexDirection: 'column' })}`


const ImgContainer = styled.div`
flex:1;`
const Image = styled.img`
width:100%;
height:90vh;
object-fit:cover;
${mobile({ height: '40vh' })}`
const InfoContainer = styled.div`
flex:1;
padding:0 50px;
${mobile({ padding: '0px 5px' })}`
const Title = styled.h1`
font-weight:200;`

const Desc = styled.p`
margin: 20px 0;`


const Price = styled.span`
font-weight:bold;
font-size:40px;`

const FilterContainer = styled.div`
margin: 30px 0;
width:50%;
display: flex;
justify-content: space-between;
${mobile({ width: '100%', justifyContent: 'start' })}`

const Filter = styled.div`
display: flex;
align-items: center;`

const FilterTitle = styled.span`
font-size:20px;
font-weight:200;`

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: #${props => props.color};
margin: 0 5px;
cursor:pointer;`


const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width:50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: '100%' })}`

const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size:25px;
font-weight:700;`

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius:10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0 10px;
`

const Button = styled.button`
padding: 14px;
border: 2px solid teal;
background-color: white;
cursor:pointer;
font-weight:bold;

&:hover{
    background-color:#68edff;
}
&:active{
    zoom:99%;
    border: none;
    color:white;
}
`


export default function Product() {
    return (
        <Container >
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src='https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg'>
                    </Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        DS Shoes
                    </Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet inventore ab harum deleniti animi itaque saepe. Eaque magni perferendis sint obcaecati, ipsa, nemo ducimus dolore molestias officiis, reiciendis esse quaerat? Reprehenderit libero dicta similique tenetur incidunt quis doloremque nobis id totam deleniti, itaque doloribus maiores fuga distinctio quae iusto.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='396EB0' />
                            <FilterColor color='116530' />
                            <FilterColor color='142F43' />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />

                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}
