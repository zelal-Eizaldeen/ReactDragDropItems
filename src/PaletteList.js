import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MiniPalette from './MiniPalette';
import sizes from './styles/sizes';
import bg from './styles/bg.svg'

const styles = {
    root: {
        
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "scroll",

            /* background by SVGBackgrounds.com */

            backgroundColor: "#ffffff",
            backgroundImage: `url(${bg})`


    },
    heading: {
fontSize: "2rem"
    },
    container: {
       width: "50%",
       display: "flex",
       alignItems: "flex-start",
       flexDirection: "column",
       flexWrap: "wrap",
       [sizes.down("lg")]: {
           width: "80%"
       }
    },
    nav: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white",
      "& a": {
          color: "white"
      }
     
    },
    palettes: {
       boxSize: "border-box",
       width: "100%",
       display: "grid",
       gridTemplateColumns: "repeat(3, 30%)",
       gridGap: "1.5rem",
       [sizes.down("xs")]: {
        gridTemplateColumns: "repeat(1, 100%)",

       },
       [sizes.down("md")]: {
        gridTemplateColumns: "repeat(1, 50%)",

       }
    }
}
class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const {palettes, classes, deletePalette} = this.props;

        return (
            <div className={classes.root}> 
              <div className={classes.container}>

                <nav className={classes.nav}>
                    <h1 className={classes.heading}>Metra</h1>
                    <Link to='/palette/new'>Create a Design</Link>
                    </nav>
                 
                        <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} 
                            classNames="fade" timeout={500}>
                                    <MiniPalette 
                                    {...palette} 
                                    handleClick={()=> this.goToPalette(palette.id)}
                                    handleDeletePalette={deletePalette}
                                    key={palette.id}
                                    id={palette.id}
                                    />
                                </CSSTransition>
                                ))}
                                
                        </TransitionGroup>
                                </div>
                            
                                </div>
        )
    }
}
export default withStyles(styles)(PaletteList);
