import React, { Component } from 'react'
import PaletteFooter from './PaletteFooter';

export default class SingleHomeItemPalette extends Component {
    
    render() {
        const {paletteName} = this.props.palette;
        return (
            <div>
                <h1>single</h1>
                <PaletteFooter paletteName={paletteName}/>
            </div>
        )
    }
}
