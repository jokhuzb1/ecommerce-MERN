import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'
import { mobile } from '../responsive'

const Container = styled.div``
const Title = styled.h1`
margin: 20px;`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`


const Filter = styled.div`
margin: 20px;
${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`

const FilterText = styled.span`
font-size: 20px;
font-weight:700;
margin-right: 20px;
${mobile({ marginRight: '0px' })}`

const Select = styled.select`
padding: 10px;
margin:0 10px;
${mobile({ margin: '10px 0' })}`
const Option = styled.option`
`

export default function ProductList() {
    return (
        <Container >
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products :</FilterText>
                    <Select>
                        <Option disabled selected >Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Blue</Option>
                        <Option>Yewllow</Option>
                        <Option>Dark</Option>
                        <Option>Light</Option>
                    </Select>
                    <Select>
                        <Option disabled selected >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>

                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select>
                        <Option selected >Newest</Option>
                        <Option>Price Low-High</Option>
                        <Option>Price High-Low</Option>



                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}
