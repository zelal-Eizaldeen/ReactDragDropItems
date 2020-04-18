import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';

import DraggableIconBox from './DraggableIconBox';



const  DraggableIconList = SortableContainer(({icons}) => {
console.log(icons, "icon")
    return(
        <div style={{height: "100%"}}>
        {icons.map((icon, i) => (

            <DraggableIconBox      
            icons={icon}  
            index={i}
          
            />

    ))}
        </div>
           
            
         
    );
});




export default DraggableIconList;