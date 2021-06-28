import React from 'react';
import ProductCard from './ProductCard';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingPage=(props)=>{
    const counter=useSelector(state=>state.CartReducer);
        return(
            <div>
                <br/>
                <div style={{position:'relative',textAlign:'right',float:'right',marginRight:'110px',fontSize:'20px',color:'white',width:'fit-content',alignItems:'right',display:'flexbox'}}>
                <Link to='/cart'>
                <button style={{padding:'5px',backgroundColor:'#e87676',color:'black',border:'none',fontWeight:'bolder'}}>
                    My Cart <i class="fas fa-shopping-cart" style={{color:'white'}}></i>&nbsp;<sup style={{color:'white'}}>{counter.length!=null?counter.length:0}</sup>
                </button>
                </Link>
                </div><br/><br/><br/>
                <div style={{width:'100%',position:'relative'}}>
                    <ProductCard Product={props.Product}/>
                </div>
            </div>
        )
}

export default ShoppingPage;