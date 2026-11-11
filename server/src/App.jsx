import {useState} from "react";
import{
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
}from "react-router-dom";
function Home(){
    const [name,setName]=useState("");
    const[description,setDescription]=useState("");

    const {id}=useParams();

    function handleHome(){
       if(name&&description){
        return;
       }
    }

    
    
    return(
        <form onSubmit={id}>
            <div>
                <h1>Product Form</h1>
                <input 
                  type="name"
                  placeholder="Enter product name"
                  value={name}
                  onChange={(e)=>setName(e.target.name)}/>

                  <br/><br/>
                <input 
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}/>

                  <br/><br/>

                  <button onClick={handleHome}>Add</button>

            </div>
        </form>

    )
}

function Product(){
    return(
    <div>
        <h1>Product page</h1>
    </div>
    )
}

function App(){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" elemnt={<Product/>}/>

            <Link to="/product/:id" >Product</Link>

          </Routes>
        </BrowserRouter> 
    )
}
export default App;


