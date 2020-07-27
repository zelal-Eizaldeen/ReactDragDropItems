import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

import FloorLists from './FloorLists';


import "./Palette.css";
 class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 50,
            height: 50,
            floor: this.props.floorUrl
           
        };
        this.deleteDesignByFloor = this.deleteDesignByFloor.bind(this);
        this.goToFloor = this.goToFloor.bind(this);

    }
    
    deleteDesignByFloor(userId,floorId){
        this.props.deleteDesignByFloor(userId,floorId);
    }
    goToFloor(design, id,floor){
        this.props.onFloorSelect(design)
        this.props.history.push(`/design/${id}/${floor}`);
     }
  
    render() {  
        const iconBoxes = this.props.fetchDesignsById.map(design => (
         <FloorLists
             key={design.id}
             id={design.id}
            onFloorSelect={this.props.onFloorSelect}
            design={design}
            handleClick={()=> this.goToFloor(design, design.design.id, design.design.floor)} 
            deleteDesignByFloor={this.deleteDesignByFloor}  
           
         />
         ));

        return (
          
                <div className="Palette" > 
                {iconBoxes}    
           
            
            </div>
        )
    }
}

export default withRouter(Palette);