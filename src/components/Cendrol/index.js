import {Component} from 'react'
import ProductCard from '../ProductCard'
import './index.css'

class Cendrol extends Component {
  state = {
    productsList: [],
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const apiUrl = 'https://api.chucknorris.io/jokes/categories'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      //   console.log(fetchedData)

      this.setState({productsList: fetchedData})
    }
  }

  render() {
    const {productsList} = this.state
    // console.log(random)
    return (
      <div className="container">
        <h1>Chuk Norries</h1>
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard
              productData={product}
              key={product}
              clickTabItem={this.clickTabItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Cendrol
