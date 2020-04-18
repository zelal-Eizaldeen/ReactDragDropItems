import React from 'react';

function PaletteFooter(props){
    const {paletteName} = props;
   return(

    <footer className="Palette-footer">
    {paletteName}
    <span className='emoji'>Metra@copy right 2020</span>
</footer>
   )
}
export default PaletteFooter;