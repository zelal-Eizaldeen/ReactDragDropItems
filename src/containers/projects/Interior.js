import React from 'react';
import Spinner from '../../components/UI/Spinner';
import './Projects.css';
import bg from '../../assests/images/bg.svg';
import PaletteFooter from '../../PaletteFooter';


 import Egela from '../../assests/images/projects/Egela.jpg';
 import Tower_building from '../../assests/images/projects/tower-building-مقاولات-الكويت.jpg';
 import Industrial from '../../assests/images/projects/مقاولات-تجارية.jpg';
 import Industrial2 from '../../assests/images/projects/مقاولات-بناء-الكويت-مصنع.jpg';



const Interior = () => {
 return(
     <div>
             <div className="background-image" style={{backgroundImage: `url(${bg})`}}></div> 
             <div className='loader hidden'>
             <Spinner />
         </div>
         <div className='card'>
             
               <div className='card-body'>
                   <h5 className='card-title'> التصميم الداخلي</h5>
                   <p className='card-text'>
                   نحن نضمن لك في شركة مترا حصولك على افضل تصميم داخلي لمساحاتك من خلال استخدام أحدث أنواع التكنولوجيا المتطورة في كلٍ من مجالات التصميم والتصنيع. نحن نخلق مساحات ديناميكية فريدة تتميز بجمالها و جودتها وعملية استخدامها حيث أن ممارستنا تكون قائمة على البحث و الإطلاع و عمل الدراسات اللازمة لكل ما هو جديد  في أساليب البناء المتطورة واستخدام المواد، لخلق تصميم داخلي لا مثيل له


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

export default Interior;