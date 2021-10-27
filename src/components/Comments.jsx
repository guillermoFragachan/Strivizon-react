import React from "react";
import SingleComment from "./SingleCommnet";
import FormControl from 'react-bootstrap/FormControl'






class Comments extends React.Component{
    state={
        comments: [],
        addedComment : {
            comment: '',
            rate: '3',
            elementId: ''

        },
        isLoading: false

    }

    fetchComments = async (query) =>{
        try{
            let response = await fetch('https://guilleromfragachan.herokuapp.com/products/'+query+"/reviews", {
                method: 'GET'
            }
            )
            if(response.ok){
                let data = await response.json()
                console.log(data)
                this.setState({
                    comments: data,
                    isLoading: false,
                    isError: false
                })
                
               
            }else{
                console.log("error");
          this.setState({ isLoading: false, isError: true });
        }

        }
        catch (error) {
            console.log(error);
            this.setState({ isLoading: false, isError: true });
          }

    }


    
    sendComment = async ( comment)=>{
        try{
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body:JSON.stringify(comment),
                headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzMwMDE1NzksImV4cCI6MTYzNDIxMTE3OX0.WGqdgb0uXW7-MCUC94FOKrTEainfaSnnNBv6Le-F7uA",
            'Content-Type': 'application/json',
        }
            }
            )
            if(response.ok){
                this.fetchComments(this.props.query)
                
               
            }else{
                console.log('nope')
            }

        }
        catch{
            console.log('error')

        }
        

    }

    componentDidMount = () => {

        //this.sendComment()
        this.fetchComments(this.props.query)
        
    }
    

    componentDidUpdate = async (prevProps) => {
        if (prevProps.query !== this.props.query) {
            console.log(this.state)
          this.setState({
            isLoading: false
          });
         this.fetchComments(this.props.query)
      }
    }


    render() {
        return(
            <>
              
                {
                    this.state.comments.length > 0 &&
                    this.state.comments.map(e=>{
                      return <SingleComment element={e._id} key={e._id} comment={e.comment}/>
                    })
                    
                }
              
                
                

                <FormControl
      placeholder="comment"
      onClick={(event)=>{
            event.target.value.length > 3 &&
            console.log(this.state.comments)

            this.setState({
                addedComment : {
                    comment: event.target.value,
                    rate: '3',
                    elementId: this.state.comments[0].elementId
        
                }

              

            })
            this.sendComment(this.state.addedComment) 

           
      }}
      
     
    />
           

            </>
            
        )
    }

}






export default Comments
