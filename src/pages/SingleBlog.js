import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'

const SingleBlog = () => {
  return (
   <>
    <Meta title={"Dynamic Blog Name"} />
    <BreadCrumb title="Dynamic Blog Name" />
    <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                           <div className="single-blog-card">
                                <Link to="/blogs" className="d-flex align-items-center gap-10">
                                    <HiOutlineArrowLeft className="fs-4 "/>Go back to Blogs
                                </Link>
                                <h3 className='title'>
                                    A Beautiful sunday morning renaissance
                                </h3>
                                <img src="images/blog-3.webp" className="img-fluid w-100 my-4" alt="blog"/>
                                <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                                </p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}

export default SingleBlog