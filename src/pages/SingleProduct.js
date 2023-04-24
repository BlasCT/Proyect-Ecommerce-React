import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from 'react-rating-stars-component'

const SingleProduct = () => {
    const [orderedProduct, setorderedProduct] = useState(true)
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6"></div>
            </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className='container-xxl'>
            <div className='row'>
                 <div className='col-12'>
                    <div className='bg-white p-3'>
                    <h4>Description</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                 </div>
            </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'>
                            <div>
                                <h4 className='mb-2'>Customer reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit="false"
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based on 2 reviews</p>
                                </div>
                            </div>
                            {orderedProduct && (
                                <div>
                                    <a className='text-decoration-underline' href=''>Write a review</a>
                                </div>   
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
        
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct