import React from 'react';
import CustomButton from '../../components/customButton/customButton';
import IconBox from '../../IconBox';

const designSummary = (props) => {
    console.log(props.icons)
//     const itemSummary = props.icons.map(icon => {
//         return <li key={icon.id}>{icon.name}</li>
//     })

    const iconBoxes = props.icons.map(icon => (
        <IconBox 
            key={icon.icon}
            name={icon.name} 
            background={icon.icon}
            positionX={icon.x}
            positionY={icon.y}
       
        />
       ));
    
    return (
        <React.Fragment>
            
            <h3>تصميمك</h3>
            <p>تصميمك يحتوي على العناصر التالية</p>
            <div style={{height: "1rem", width: "100%", backgroundColor: "red"}}>
            {iconBoxes}
            </div>
         
            <p>الاستمرار لإرسال التصميم</p>
            <CustomButton btnType="Danger" >لا</CustomButton>
            <CustomButton btnType="Success">نعم</CustomButton>
        </React.Fragment>
    )
};

export default designSummary;