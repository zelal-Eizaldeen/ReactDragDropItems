import React from 'react';
import Button from '@material-ui/core/Button';

import {createStructuredSelector} from 'reselect';
import {Helmet} from "react-helmet";

import {Link} from 'react-router-dom';

import MenuItem from '../menuItem/menuItem';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import './directory.scss';
import homeImage from '../../assests/images/homeImage.jpg';
import PaletteFooter from '../../PaletteFooter';
import Spinner from '../UI/Spinner';
const  Directory = ({sections, isLoading}) => {
 
  let projects = (
 
    <div className='directory-menu'> 
   {sections.map(({ id, ...otherSectionProps }) => (
    <MenuItem key={id} {...otherSectionProps} />
  ))} 

 </div>
 
 
  )
if(isLoading){
  projects=<Spinner />
}
 return(
  
  <div className="root"> 
   <Helmet>
     <title>مقاولات عامة واستشارات هندسية</title>
        <meta name="description" content="مقاولات الكويت إبداع في التصميم الهندسي والبناء بأفضل جودة" />
   </Helmet>
     <section className="hero">
    <div className="background-image" style={{backgroundImage: `url(${homeImage})`}}></div>
    <div className="hero-content-area">
      <h1>  ناركو للاستشارات الهندسية</h1>
      <h3>استمتع برحلة بناء بيتك معنا  </h3>
      {/* <Link to='tel:0096565666649'> */}
      <a href="tel:65666649">
     <Button  className="btn" variant="contained" color='secondary'>اتصل بنا</Button>
     </a>
  {/* </Link>      */}
    </div>
    </section>
    <section class="destinations">
    <h3 class="title">بعض مشاريعنا</h3>
    <p>            شركة ناركو للاستشارات الهندسية والمقاولات العامة. نعلم أنك مشغول دائما. لا يوجد لديك وقت كافٍ
    لبناء منزل حديث بواجهات عصرية ومساحات مريحة ضمن ميزانيتك المحدودة. لذا دعنا نهتم بذلك لك. فريقنا من المهندسيين المعماريين والإنشائيين ممتاز في ذلك. نعدك بذلك


</p>
    <hr />
    </section>

  {projects}
  <section class="packages">
    <h3 class="title">صمم بيتك بنفسك</h3>
    <p>يمكنك الآن تصميم بيتك بنفسك وإرسال مخططك لمهندسي الشركة وأنت في مكانك. دون الحاجة لزيارة الشركة. خدمة الكترونية تم تصميمها 
      بأيدي مهندسي برمجيات. نريد الأفضل لك ولعائلتك 
    </p>
    <hr />

    <ul class="grid">
      <li>
        <i class="fas fa-dungeon fa-4x"></i>
        <h4>مدخل المنزل</h4>
        <p>لرسم مدخل المنزل اختار هذه الأيقونة</p>
      </li>
      <li>
        <i class="fas fa-tv fa-4x"></i>
        <h4>صالة</h4>
        <p>تريد تحديد مكان الصالة؟ اختار أيقونة صالة</p>
      </li>
      <li>
        <i class="fas fa-tree fa-4x"></i>
        <h4>  حدائق داخلية</h4>
        <p> إذا أردت حديقة داخلية فاختر هذه الأيقونة</p>
      </li>
      <li>
        <i class="fa fa-bicycle fa-4x"></i>
        <h4>غرفة رياضة</h4>
        <p>للمحافظة علي لياقة جسمك لابد من تصميم غرفة رياضة فاختر هذه الأيقونة</p>
      </li>
    </ul>
    <Link to='/design/new'>
     <Button  className="btn" variant="contained" color='secondary'>صمم بيتك</Button>
  </Link>     
  </section>

  <section class="contact">
    <h3 class="title">من نحن </h3>
    <p> هل تريد بناء منزل العمر؟ هل تريد تصميم بأفضل جودة والمزيد من المعلومات اتصل بنا</p>
    <Link to='/contactus'>
     <Button  className="btn" variant="contained" color='secondary'> استشر مهندسنا</Button>
  </Link>   
  
  </section>
<PaletteFooter />
         </div>
 )}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect (mapStateToProps)(Directory);
