import React from "react";
import ReactStarts from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product imag" />
            <img src="images/reloj.jpg" className="img-fluid" width={270} alt="product imag" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStarts
              count={5}
              size={24}
              value={4}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolamet consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product imag" />
            <img src="images/reloj.jpg" className="img-fluid" width={270} alt="product imag" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphone bulk 10 pack multi colored for students
            </h5>
            <ReactStarts
              count={5}
              size={24}
              value={4}
              edit="false"
              activeColor="#ffd700"
            />
            <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolamet consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>

  );
}

export default ProductCard;
