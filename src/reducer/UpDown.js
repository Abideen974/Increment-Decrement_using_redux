

let intitalState = 0;
const onChangeNumber = (state = intitalState , action) =>{
      switch(action.type){
         case "INCREAMENT": return state +  action.payload;
         case "DECREAMENT": return state - 1;

         default: return state;

     }
 }
 export default onChangeNumber;