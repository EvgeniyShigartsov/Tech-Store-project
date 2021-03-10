/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import rateCalculator from '../../../utils/rateCalculator'
import upperCaseFirstLetter from '../../../utils/upperCaseFirstLetter'
import {ProductCard} from '../../ProductCard/ProductCard'
import { getProductsToCatalog } from '../../../store/products/middleware'
import CatalogPagination from '../CatalogPagination/CatalogPagination'
import { ProductsWrapper, StyledSpin, Wrapper } from './StyledCatalogProductsPlace'

const mapStateToProps = (state) => ({
  catalogProducts: state.products.catalog.catalogProducts
})

const CatalogProductsPlace = connect(mapStateToProps, {
  getProductsToCatalog
})((
  {
    config,
    setSortAndPagination,
    catalogProducts,
    getProductsToCatalog
  }
) => {
  useEffect(() => {
    getProductsToCatalog(config)
  }, [config, getProductsToCatalog])

  return (
    catalogProducts.length === 0
      ? <StyledSpin size="large" tip="Loading..." />
      : (
        <Wrapper>
          <ProductsWrapper>
            {catalogProducts.map((el) => (
              <ProductCard
                key={el.itemNo}
                title={upperCaseFirstLetter(el.name)}
                img={el.imageUrls[0]}
                previousPrice={el.previousPrice}
                currentPrice={el.currentPrice}
                isGoodsInStock={el.quantity > 0}
                {...rateCalculator(el.reviews)}
              />
            ))}
          </ProductsWrapper>
          <CatalogPagination
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
        </Wrapper>
      )
  )
})

CatalogProductsPlace.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired
}

export default CatalogProductsPlace