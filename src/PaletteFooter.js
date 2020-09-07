import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import './PaletteFooter.css';
function PaletteFooter(props){
  
   return(

    <footer className="footer">
    <Helmet>
     <title>استشارات وحلول هندسية </title>
        <meta name="description" content="مقاول بناء 
        شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
         ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
         تشطيب على المفتاح من التصميم للتسليم
         المخطط والرخصة
" />
   </Helmet>
    <p>Metra@copy right 2020</p>
  
    <ul>
      <li><a href="https://www.instagram.com/metra_eng_sol/"><i class="fab fa-instagram"></i> follow us in instgram</a></li>
       <li>  <Link className='option' to='/search'>
      ابحث
      </Link></li>
    </ul>
</footer>
   )
}
export default PaletteFooter;


