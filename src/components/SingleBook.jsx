import Card from 'react-bootstrap/Card'
import { Component } from 'react'






class MyCard extends Component {

  
// downloadPDF = async(id) => {
//   fetch("https://guilleromfragachan.herokuapp.com/products/download/"+id, {
//       headers: {
//       }
//   }).then(response => { return response.json() })
//       .then(data => {
//           console.log(this.props.key)
//           // this.setState({
//           //     data:data
//           // })




//       })

//     }

 

  render() {

    return (

      

      <>
      <Card
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => this.props.selectedProduct(this.props.id)}
          // onClick={(e) => this.downloadPDF(this.props.key)}
          
      >
          <Card.Img variant="top" src={this.props.book.imageUrl} />
          <Card.Body>
              <Card.Title style={{ color: 'black' }}>{this.props.book.name}</Card.Title>
              <a href={"https://guilleromfragachan.herokuapp.com/products/download/"+this.props.id}>download</a>
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