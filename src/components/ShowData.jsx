import React from "react";



class ShowData extends React.Component{

    state ={
        data: null
    }

    getData = async() => {
        fetch("https://guilleromfragachan.herokuapp.com/products", {
            headers: {
            }
        }).then(response => { return response.json() })
            .then(data => {

                this.setState({
                    data:data
                })




            })

    }
    componentDidMount = ()=>{
        this.getData()
    }

    render(){
        return(
            <>
            {
                this.state.data &&
                this.state.data.map((e)=>{
                    
                    
                return<div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div class="my-3 p-3">
                      <h2 class="display-5">${e.name}</h2>
                    
                      <p class="lead">${e.description}</p>
                      <p class="lead">${e.brand}</p>
                      <p class="lead">${e.price}</p>
                      <button type="button" class="btn btn-success" onclick="window.location.href='./backoffice.html?id=${e._id}';" >Edit</button>
                      <button type="button" class="btn btn-primary" onclick="window.location.href='./detail.html?id=${e._id}';" >Details</button>

                        
                    </div>
                    <div class="bg-body shadow-sm mx-auto inlineEEE" >
                        <img src={e.imageUrl} class="img-fluid"/>
                        
                        </div>
                  </div>
            
            
                })                
            
                
            
            
            }
            </>
        )
    }
}

export default ShowData