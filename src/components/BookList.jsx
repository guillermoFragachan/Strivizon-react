import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Comments from "./Comments";

import MyCard from "./SingleBook";



import FormControl from "react-bootstrap/FormControl";


class BookList extends Component {
  state = {
    
    data: null,
    selectedProduct: null
    
  };

  
  getData = async() => {
    fetch("https://guilleromfragachan.herokuapp.com/products", {
        headers: {
        }
    }).then(response => { return response.json() })
        .then(data => {
            console.log(data)
            this.setState({
                data:data
            })




        })

}
componentDidMount = ()=>{
    this.getData()
}

  

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
        <Row>
          <FormControl
            placeholder="search"
           

           
          />

          {
          this.state.data &&
          this.state.data.map((e) => (
            <Col key={e._id} xs={2}>
              <MyCard selectedProduct={(_id)=>{
                this.setState({
                  selectedProduct:_id
                })
              }} book={e} />
            </Col>
          ))} 
        </Row>

        </Col>
        <Col md={4}>
          
       
              <Comments query={this.state}/> 
           
          
          </Col>

        </Row>
      </Container>
    );
  }
}

export default BookList;
