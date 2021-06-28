import React, { useState } from 'react';
import Magnifier from 'react-magnifier';
import {useDispatch} from 'react-redux';
import AddItem from './actions/AddItem';

const ProductView=(props)=>{
    const Product=props.Product; 
    const dispatch=useDispatch();
    const [quantity,setQuantity]=useState({
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    });
    function changeQuantity(e){
        setQuantity({
            ...quantity,
            [e.target.id]:e.target.value
        });
    }
    function addToCart(key,name,photo,price,detail){
        if(quantity[key]!=0){
        const unique_id=Math.floor(Math.random()*90000) + 10000;
        const itemdescription={id:unique_id,product_id:key,name:name,photo:photo,price:price,detail:detail,addedQuantity:quantity[key]};
        dispatch(AddItem(itemdescription));
        }
    }
    return(
        Product.map((myList)=>{
            return(
                <div className="card" style={{marginLeft:"9%",minWidth:"20%",maxWidth:'100%'}}>
                    <div class="image">
                    <Magnifier src={myList.Photo} style={{height:"300px"}}/>
                </div>
                <div class="content">
                <a class="header">{myList.Name}<span style={{border:"1px solid black",float:"right",padding:"2px"}}>Rs.{myList.Price}</span></a>
                    <div class="description">
                    <p>{myList.Detail}</p><br/>
                    </div>
                    <div class="extra">
                    <div class="ui label">NEW</div>
                    <div class="ui label"><i class="globe icon"></i> Available</div><br/><br/>
                    <div class="ui input focus" style={{width:"60%"}}>
                        <input type="number" id={myList.key} value={quantity[myList.key]==0?null:quantity[myList.key]} placeholder="Quantity..." onChange={changeQuantity}/>
                    </div>
                    <div class="ui primary button" style={{float:'right'}}  onClick={(e)=>{addToCart(myList.key,myList.Name,myList.Photo,myList.Price,myList.Detail)}}>
                        <i class="cart icon"/>
                    </div>
                    </div>
                    </div>   
                </div>    
            )
        })
    )
}

const ProductCard=(props)=>{
    return(
        <div className="ui cards">  
            {ProductView(props)}        
        </div>
    )
}

export default ProductCard;