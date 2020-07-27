import React from 'react';
import {Helmet} from 'react-helmet';
import './PaletteFooter.css';
function PaletteFooter(props){
  
   return(

    <footer className="footer">
    <Helmet>
     <title>مقاولات عامة واستشارات هندسية - constructions - مقاولات عامة الكويت - مقاول بناء</title>
        <meta name="description" content="مقاول بناء 
        شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
         ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
         تشطيب على المفتاح من التصميم للتسليم
         المخطط والرخصة
" />
   </Helmet>
    <p>Narco@copy right 2020</p>
  
    <ul>
      <li><a href="https://www.instagram.com/metra_eng_sol/"><i class="fab fa-instagram"></i> follow us in instgram</a></li>
     
    </ul>
</footer>
   )
}
export default PaletteFooter;


