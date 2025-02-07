import React,{useState} from "react";

import "./Cigmafeed.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { CigmafeedData } from "./Data.js";



export default function FeedData(){

    const [selectedLg, setselectedLg] = useState(null);

    const [quantity, setQuantity] = useState("1");

    function handleClick(id){
        setselectedLg(id !== selectedLg ? id : null);
    }

    const items = CigmafeedData;
    console.log(items); 
    return(
        <div className="row" id="data">
            
            {items.map((item) => (
                <div className="col-sm-4 mt-4" id="col">
         <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src={item.url}/>
            <Card.Text>
            <span class="badge bg-secondary">Qty.:{item.quantity-quantity}</span> 
            </Card.Text>
         <Card.Body>
         <Card.Title className="text-info">{item.title}</Card.Title>
         <Card.Title>{item.name}</Card.Title>
         <div class="btn-group">
           <button type="button" key={items.id}
         onClick={() => handleClick(item.id)} className= { item.id === selectedLg ?"  btn btn-primary ":" btn btn-primary"}> {item.id === selectedLg ? "Eng" : "Hin"}</button> 
           
         </div>
         <Card.Text>
         {item.id === selectedLg ? item.feedingHin : item.feedingEng}
         </Card.Text>
         <Card.Text>
         <span class="badge bg-success">Price: {item.price}</span>
         </Card.Text>
         <Ordered quantity = {quantity} InQuantity = {setQuantity} item = {item} inChange = {handleClick}/>
         </Card.Body>
         </Card> 
         </div> ))}
        
        </div>
    )
}


function Ordered({quantity, InQuantity, item , inChange}){
    return(
        <div >
            <Card.Text>
         <InputGroup className="mb-3">
         <InputGroup.Text id="inputGroup-sizing-default">
         Qty.
         </InputGroup.Text >
         <Form.Control
          aria-label=""
          aria-describedby="inputGroup-sizing-default"
          placeholder="between 1 and 10" 
          value={quantity} onChange={(e) => InQuantity(Number(e.target.value))}/>
         </InputGroup>
         </Card.Text>
         <Card.Text>
         <span class="badge bg-danger">Total: {quantity*item.price}</span>
         </Card.Text>
         <Button variant="primary">Order</Button>
        </div>
    )
}