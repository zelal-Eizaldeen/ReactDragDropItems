import React, { Component } from 'react';
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';

import 'rc-slider/assets/index.css';

import "./IconBox.css";


export default class IconBox extends Component {
   
    render() {
        const {name, backgroundImage, width, 
            height,  changeHeight, changeWidth, moreUrl} = this.props;
     
        return (
           
           
            <div style={{backgroundImage}} className="IconBox">
 <div className="slider-h-container">
     <span className='width-slider'>Width: {width}</span>
 <div className='slider-horizontal'>
            <Slider 
             step={1}
             defaultValue={width}
             min={1} 
             max={500}
        //    onAfterChange={changeWidth}
             onChange={changeWidth}
          
              />
            </div>
                </div>
       
                 <div className='copy-container'>
                    <div className='box-content'>
                    <span>{name}</span>
                    </div>
                 
                </div>
                <div className='slider-v-container'>
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}> 
                    <span className='height-slider'>Height: {height}</span>
                    </Link>
                <div className='slider-vertical'>
                <Slider 
               vertical
            defaultValue={height}
             min={5} 
             max={500}
             onChange={changeHeight}
             
             />
                </div>
                </div>
              
        </div>
        
        );
    }
}
