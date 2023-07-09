import './index.css'
import Popup from 'reactjs-popup'
import {ImCancelCircle} from 'react-icons/im'
import Card from '../Card'

const ProductCard = props => {
  const {productData} = props

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="box">
          <h1 className="heading">{productData}</h1>
          <p className="para">Unlimited jokes on {productData}</p>
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <div className="movie-container">
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              <ImCancelCircle size={20} color="#231f20" className="cancel" />
              <Card productData={productData} />
            </button>
          </div>
        </>
      )}
    </Popup>
  )
}

export default ProductCard
