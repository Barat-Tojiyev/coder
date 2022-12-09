

export const reducer = (state,action)=>{
    switch(action.type){
      case 'buy':
        let rel=state.product.map((value)=>value.id === action.payload.id && {...value,addtocard:true,quantity:1})
        rel =rel.filter((value)=>value && value)        
        const added=[...state.basket,...rel]   
        let reset=state.product.map((value)=>value.id === action.payload.id ?rel[0]:value )           
        return {...state,basket:added ,product:reset}

      case 'plus':
        let plus =state.basket.map((value)=>value.id===action.payload.id  && {...value,quantity:value.quantity+1})
        plus =plus.filter((value)=>value.id &&value.id)
        let newPlus=state.basket.map((value)=>value.id === action.payload.id ? plus[0]:value)         
        return{ ...state,basket:newPlus}

      case 'minus':
        let minus=state.basket.map((value)=>value.id === action.payload.id && {...value,quantity:value.quantity-1})
        minus =minus.filter((value)=>value.id&&value.id)
        let newMinus=state.basket.map((value)=>value.id === action.payload.id ? minus[0]:value)
        return{ ...state,basket:newMinus}  
        
      case 'delete':
        let delet=state.basket.filter((value)=>value.id !== action.payload.id)
        let newDelet=state.product.map((value)=>value.id===action.payload.id &&{...value,quantity:0,addtocard:false})
        newDelet=newDelet.filter((value)=>value.id&&value.id)
        let newProduct=state.product.map((value)=>value.id===action.payload.id ? newDelet[0] :value )        
        return{ ...state,basket:delet,product:newProduct}  

        case 'like':
          let like=state.product.map((value)=> value.id ===action.payload.id && {...value,like:!value.like})
          like=like.filter((value)=>value.id&&value.id)
          let addLike=[...state.likes,...like]
          let newLike =state.product.map((value)=>value.id ===action.payload.id ? like[0]:value)      
          return {...state,product:newLike,likes:addLike}
        

      case 'basket':        
        return {...state,korzinka:!state.korzinka}
      
      default : return state
    }

  }
