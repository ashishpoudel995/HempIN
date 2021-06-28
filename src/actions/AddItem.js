const AddItem=(itemdescription)=>{
    return{
        type:'ADD_ITEM',
        payload:itemdescription
    }
}

export default AddItem;