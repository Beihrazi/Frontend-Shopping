import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
        <div className='container'>
        <h3>Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img 
              src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg"
            />
          </div>
          <div className="slide">
            <img
              src="https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg"
            />
          </div>
          <div className="slide">
            <img
              src="https://i.pinimg.com/736x/c3/bd/41/c3bd410bfb65ddf75297fc4dd111825b.jpg"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn5.vectorstock.com/i/1000x1000/09/59/modern-unique-business-logo-design-vector-36710959.jpg"
            />
          </div>
          <div className="slide">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/008/214/517/small/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg"
            />
          </div>
        </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`

export default Trusted