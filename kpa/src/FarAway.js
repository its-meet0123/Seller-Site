import React,{useState} from "react";

 export default function FarAway(){
    return(
        <div className="app">
         <Logo />
         <Form />
         <PackingList />
         <Stats />
        </div>
    )
}

 function Logo(){
    return(
        <div className="">
       <h1>Far Away</h1>
        </div>
    )
}

function Form(){

    const [description, setDescription] = useState("");
    const[quantity, setQuantity] = useState(1);

    function handleSubmit(e){
        e.preventDefault();
       // console.log(e);
       const newItem = {description, quantity, packed: false, id:Date.now()};
       console.log(newItem);
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for Your trip ? </h3>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {Array.from({length:5}, (_,i) => i+1).map((num) => (
                <option value={num} key={num}>{num}</option>
            ))}
        </select>
        <input type="text" placeholder="Items........" value={description} onChange={(e) =>{setDescription(e.target.value);
             //console.log(e.target);
             //console.log(e.target.value);
             }}/>
        <button>Add</button>
        </form>
    )
}

function PackingList(){
    return(
        <div className="list">
           <Items />
        </div>
    )
}

function Items(){
    return(
        <div className="">
            a
        </div>
    )
}

function Stats(){
    return(
        <footer className="stats">
            <em>You have X items in your list, and you already packed X (X%) </em>
        </footer>
    )
}

