import './ProductPreviewCardComponent.scss'
import productReviewImgMobile from '../../assets/images/image-product-mobile.jpg'
import productReviewImgDesktop from '../../assets/images/image-product-desktop.jpg'
import btnIcon from '../../assets/icons/icon-cart.svg'

function ProductPreviewCardComponent() {
  return (
    <div className="product-review-card-component">
      <img className="image-mobile" src={productReviewImgMobile} alt="image-mobile" />
      <img className="image-desktop" src={productReviewImgDesktop} alt="image-desktop" />
      <div className="content">
        <div className="categorie">Perfume</div>
        <div className="title">Gabrielle Essence Eau De Parfum</div>
        <div className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
        <div className="price">
          <div className="actual-price">$149.99</div>
          <div className="old-price">$169.99</div>
        </div>
        <div className="button">
          <img src={btnIcon} alt="cart icon" className="btn-icon" />
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  )
}

export default ProductPreviewCardComponent
