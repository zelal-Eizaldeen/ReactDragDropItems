import React, { Component } from 'react'
import IconBox from './IconBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';


import "./Palette.css";
export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 50,
            height: 50,
            floor: this.props.floorUrl
           
        };
        this.changeWidth = this.changeWidth.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeFloor = this.changeFloor.bind(this);
    }

    changeWidth(width) {
      
        this.setState({ width });
    }
    changeHeight(height) {
      
        this.setState({ height });
    }
  
    changeFloor(val){
        this.setState({ floor: val})
    }
  
    render() {
        const {floorUrl} = this.props;
        const {paletteName, homeItems, id} = this.props.palette;
        const {width, height} = this.state;
        
    //    const floorItems = palette.homeItems.filter(homeItem => homeItem.floor === floor);
        const iconBoxes = homeItems.map(homeItem => (
         <IconBox 
              key={homeItem.id}
              name={homeItem.name} 
              icon={homeItem.icon}
              backgroundImage={`url(${homeItem.url})`} 
              width={width}
              height={height}
              changeWidth={this.changeWidth}
              changeHeight={this.changeHeight}
              moreUrl={`/palette/${id}/${homeItem.id}`}
         />
        ));


        return (
            <div className="Palette">
              <Navbar  floorUrl={floorUrl} handleChange={this.changeFloor} />
                <div className="Palette-icons">{iconBoxes}    
                </div>
              <PaletteFooter paletteName={paletteName}/>
            </div>
        )
    }
}
