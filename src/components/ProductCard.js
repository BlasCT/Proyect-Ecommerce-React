import React from "react";
import ReactStarts from "react-rating-stars-component";
import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <Link>
                <img src="images/wish.svg" alt="wishlist"/>
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
  );
}

export default ProductCard;
