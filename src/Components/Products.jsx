import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`

display: flex;
flex-wrap:wrap;
justify-content: space-between;



`
const Header = styled.h1`
    padding: 50px;
  background-image: url('https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif');
  background-size: cover;
  font-weight:bold;
  color: transparent;
  background-clip: border-box;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 60px;
  line-height: .75;
  margin: 10px 0;
  text-align:center;`
export default function Products() {
    return (
        <>

            <Container>

                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </Container>
        </>
    )
}
