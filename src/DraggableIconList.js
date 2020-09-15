import React from 'react';

import DraggableIconBox from './DraggableIconBox';



const  DraggableIconList = (props) => {

    
        const {icons, removeIcon, addNewPosition, open, floor} = props;
        
        return(  
                <div  style={{height: "100%",   overflow: "hidden",backgroundColor:"#eee"}}>
                 {icons.map((icon, i)=> (
                 <DraggableIconBox
                  key={i}
                  index={i}
                  keyId={icon.id} 
                  name={icon.name}
                  handleClick={()=> removeIcon(icon.icon)} 
                  icon={icon.icon} 
                  addNewPosition={addNewPosition}
                  open={open}
                 icons={icons}
                 floor={floor}
              
                
                  
    
                  />
                ))} 

                </div>
           
        
      );
    }

export default DraggableIconList;

