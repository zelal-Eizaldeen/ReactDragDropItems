import React, { Component } from 'react';
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
        padding: "150px 80px",
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
    state = {
        fetchDesigns: [],
        fetchDesignsById: []
    }
  
    goToDesign(id){
      this.props.history.push(`/design/${id}`);

    }
   
  
    render() {
       
        const { classes, deleteDesignById, fetchDesigns} = this.props; 

        return (
            <div className={classes.root}> 
              <div className={classes.container}>

                <nav className={classes.nav}>
                    <h1 className={classes.heading}>Metra</h1>

                    {/* <Link to='/'>Create a Design</Link> */}
                    </nav>
                 
                        <TransitionGroup className={classes.palettes}>
                       
                       { 
                                fetchDesigns.map(design => (

                            <CSSTransition key={design.id} 
                            classNames="fade" timeout={500}>
                                    <MiniPalette 
                                    // designs={designs}
                                    id={design.id}
                                    email={design.config.email}
                                    {...design} 
                                    handleClick={()=> this.goToDesign(design.id)}
                                    deleteDesignById={deleteDesignById}
                                    key={design.id}
                                    id={design.id}
                                    loading={this.props.loading}
                                   
                                    />
                                </CSSTransition>
                                ))
                        
                        }  
                                
                              
                        </TransitionGroup>
                                </div>
                            
                                </div>
        )
    }
}
export default withStyles(styles)(PaletteList);
