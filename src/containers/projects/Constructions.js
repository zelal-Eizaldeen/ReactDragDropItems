import React from 'react';
import Spinner from '../../components/UI/Spinner';
import './Projects.css';
import bg from '../../assests/images/bg.svg';
import PaletteFooter from '../../PaletteFooter';


 import Egela from '../../assests/images/projects/Egela.jpg';
 import Egela2 from '../../assests/images/projects/Egela2.jpg';
 import Tower_building from '../../assests/images/projects/tower-building-مقاولات-الكويت.jpg';
 import Plans_kuwait from '../../assests/images/projects/سرداب-مقاولات-الكويت.jpg';
 import Plans_kuwaitـground from '../../assests/images/projects/أرضي-مقاولات-الكويت.jpg';
 import Plans_kuwaitـfirst from '../../assests/images/projects/أول-مقاولات-الكويت.jpg';
 import Plans_kuwaitـsecond from '../../assests/images/projects/ثاني-مقاولات-الكويت.jpg';
 import Industrial from '../../assests/images/projects/مقاولات-تجارية.jpg';
 import Industrial2 from '../../assests/images/projects/مقاولات-بناء-الكويت-مصنع.jpg';



const Constructions = () => {
 return(
     <div>
             <div className="background-image" style={{backgroundImage: `url(${bg})`}}></div> 
             <div className='loader hidden'>
             <Spinner />
         </div>
         <div className='card'>
             
               <div className='card-body'>
                   <h5 className='card-title'>  تنفيذ المشاريع</h5>
                   <p className='card-text'>
                   نقوم في شركة مترا بتقديم جميع انواع خدمات تنفيذ المشاريع، وبأسعار تنافسية. كما اننا نضمن لك أعلى معايير الجودة في جميع الأعمال مع الالتزام بالجدول الزمني 

<br />
لا تتردد بالتواصل معنا للاستفسار عن استشارتك المجانية و السعرالتقريبي لمشروعك




                   </p>

                   <img src={`${Egela}`}alt=''/>
              <img src={`${Tower_building}`}alt=''/>
              <img src={`${Industrial2}`}alt=''/>
              <img src={`${Industrial}`}alt=''/>
              <PaletteFooter />
     </div>


               
               </div>


        
   {/* Loader */}
  
      
     </div>
 )
}

export default Constructions;