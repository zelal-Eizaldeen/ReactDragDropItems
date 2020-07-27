import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import IconBox from './IconBox';



import "./SingleDesign.css";
 class SingleDesign extends Component {
    constructor(props){
        super(props);
      
    }

    render() {
          if(!this.props.design){
              return <div>Loading ....</div>;
          }
       
      
        const iconBoxes = this.props.design.design.homeItems.map(icon => (
         <IconBox 
             key={icon.icon}
             name={icon.name} 
             background={icon.icon}
             positionX={icon.x}
             positionY={icon.y}
             fileName={this.props.design.design.fileName}
            
             
            
         />
        ));
     


        return (
          
                <div className="Palette"  
               > 
                {iconBoxes}    
           
              {/* <PaletteFooter 
            //   paletteName={paletteName}
              /> */}
            </div>
        )
    }
}

export default withRouter(SingleDesign);