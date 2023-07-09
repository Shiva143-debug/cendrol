import {Component} from 'react'
import './index.css'

// const Card = props => {
//   const {productData} = props
//   console.log(productData)
//   return <p>okkkkkk</p>
// }
// export default Card

class Card extends Component {
  state = {random: []}

  componentDidMount() {
    this.getRandom()
  }

  componentWillUnmount() {
    this.getRandom()
  }

  buttonClick = () => {
    this.getRandom()
  }

  getRandom = async () => {
    const {productData} = this.props

    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${productData}`
    // console.log(apiUrl)
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      this.setState({random: fetchedData})
    }
  }

  render() {
    const {random} = this.state
    const {productData} = this.props
    // console.log(random)
    return (
      <div className="pop">
        <h1 className="head">{productData}</h1>
        <div className="border">
          <p className="joke">{random.value}</p>
          <button
            type="button"
            className="next-joke"
            onClick={this.buttonClick}
          >
            Next joke
          </button>
        </div>
      </div>
    )
  }
}
export default Card
