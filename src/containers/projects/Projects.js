import React from 'react';
import Spinner from '../../components/UI/Spinner';
import './Projects.css';
import bg from '../../assests/images/bg.svg';
import PaletteFooter from '../../PaletteFooter';

import JaberAlAhmed from '../../assests/images/projects/JaberAlAhmed.jpg';
import Rabyia from '../../assests/images/projects/Rabyia.jpg';
import SabahAlAhmed from '../../assests/images/projects/SabahAlAhmed.jpg';
 import Fayha from '../../assests/images/projects/Fayha.jpg';
import Edelia from '../../assests/images/projects/Edelia.jpg';
 import Edelia2 from '../../assests/images/projects/Edelia2.jpg';
 



const Projects = () => {
 return(
     <div>
             <div className="background-image" style={{backgroundImage: `url(${bg})`}}></div> 
             <div className='loader hidden'>
             <Spinner />
         </div>
         <div className='card'>
             
               <div className='card-body'>
                   <h5 className='card-title'>الهندسة المعمارية</h5>
                   <p className='card-text'>تميز في شركة مترا بجودة تصاميمنا المعمارية والتزامنا بإنجاز العمل بالوقت المحدد على أكمل وجه. كما نفتخر بقدرتنا الكاملة على تنفيذ جميع أنواع المشاريع المعمارية مهما تعددت و تنوعت ظروف و متطلبات العميل و ذلك نظراً لامكانيات فريق العمل لدنيا المكون من نخبة المهندسين المعماريين ومديري المشاريع ذوي الخبرة بكل مجالات العمارة، واللذين باستطاعتهم قيادة كل مشروع بشكل فريد و متميز لإنجاز عمل هندسي معماري ناجح وجميل و بالتكلفة المطلوبة

                   </p>

                   <img src={`${JaberAlAhmed}`}alt=''/>
              <img src={`${Rabyia}`}alt=''/>
              <img src={`${SabahAlAhmed}`}alt=''/>
              <img src={`${Fayha}`}alt=''/>
              <img src={`${Edelia}`}alt=''/>
              <img src={`${Edelia2}`}alt=''/>
              <PaletteFooter />
     </div>


               
               </div>


        
   {/* Loader */}
  
      
     </div>
 )
}

export default Projects;