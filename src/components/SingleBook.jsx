import Card from 'react-bootstrap/Card'
import { Component } from 'react'






class MyCard extends Component {

 

  render() {

    return (

      

      <>
      <Card
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => this.props.selectedProduct(this.props.book._id)}
          
      >
          <Card.Img variant="top" src={this.props.book.imageUrl} />
          <Card.Body>
              <Card.Title style={{ color: 'black' }}>{this.props.book.name}</Card.Title>
          </Card.Body>
      </Card>
      {/* {
          this.state.selected && <CommentArea asin={this.props.book.asin} />
      } */}
  </>



    )

  }

}




export default MyCard