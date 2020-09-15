import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import PaletteFooter from '../../PaletteFooter';
import CustomButton from '../customButton/customButton';
import bg from '../../assests/images/bg.svg';

import './Prices.css'

const Prices = (props) => {
    return(
    <div> 
   <div className="container" style={{backgroundImage: `url(${bg})`}}>
  <Helmet>
    <title>   مترا | أسعار البناء في الكويت  </title>
     <meta name="description" content="مقاول بناء 
       شركة مقاولات ٦٥٦٦٦٦٤٩ اضافة ادوار و توسعات . شاليهات 
        ديوانية . ملاحق . ترميمات . قسائم صناعية وتجارية 
        تشطيب على المفتاح من التصميم للتسليم
        المخطط والرخصة اسعار البناء سعر المتر
" />
  </Helmet>
  <a   href="#prices">
  <CustomButton className="priceBtn"> أسعارنا </CustomButton> 
  </a>
    </div>

    <section id="prices"> 
          <table id="pricesTable">
              <thead className="trDirection">
              <tr className="trDirection">
                    <th className="drag-column backlog-column">
                    
                    <span style={{ flex: "1", textAlign:"center"}}>البند</span>
          
                       </th>
                <th className="drag-column progress-column">
                            <span>تشطيب جيد</span>
                </th>
                <th className="drag-column complete-column">
                    <span>تشطيب ديلوكس</span>
                </th>
                <th className="drag-column on-hold-column">
                      <span >تشطيب سوبر ديلوكس</span>
                             
                </th>
              </tr>
              </thead>
           
              <tbody>
              <tr className="trDirection">
                  <td className="drag-item">نظام الأسقف</td>
                  <td className="drag-item">جسور وبلاطات</td>
                  <td className="drag-item">هوردي باتجاهين لكل سقف</td>
                  <td className="drag-item">هوردي باتجاهٌن لكل الأسقف</td>
              </tr>

              <tr className="trDirection">
                    <td className="drag-item">الخرسانة</td>
                    <td className="drag-item">جاهزة من الساير أو الإعمار أو ما يماثلهما </td>
                    <td className="drag-item">أسيكو أو بورتلاند</td>
                    <td className="drag-item">أسيكو أو بورتلاند</td>
                </tr>

                <tr className="trDirection">
                        <td className="drag-item">الطابوق الأبيض</td>
                        <td className="drag-item"> إماراتي أو ما يماثلهما</td>
                        <td className="drag-item">أسيكو أو الصناعات أو الاتحاد</td>
                        <td className="drag-item">أسيكو أو الصناعات أو الاتحاد</td>
                       
                    </tr>
                
                    <tr className="trDirection">
                            <td className="drag-item">الصحي</td>
                            <td  className="drag-item">بايبات معتمدة</td>
                            <td className="drag-item">عدساني</td>
                            <td className="drag-item">ترين أو عدساني أو اليوسفي بي في سي</td>
                           
                        </tr>   
                       
                        <tr className="trDirection">
                                <td className="drag-item">الكهرباء</td>
                                <td  className="drag-item">صنادٌق ووايرات معتمدة, عدد 2 بلاك و 2 إنارة للغرف و 4 للصالات, تمديد تلفزٌون
                                        للصالات فقط</td>
                                <td className="drag-item">صنادٌق الجسار ووايرات خليجي, 4 بلاكات وإنارات للغرف و 6 للصالات</td>  

                                <td className="drag-item">ترين أو عدساني أو اليوسفي بي في سي</td>
                               
                            </tr>   
                      
                            <tr className="trDirection">
                                    <td className="drag-item">العازل</td>
                                    <td  className="drag-item">طربال للحمامات والأسطح واسمنتً للسرداب</td>
                                    <td className="drag-item">طربال للحمامات, طربال أو بوليثرين للأسطح</td>  
                                   <td className="drag-item">طربال للحمامات, طربال أو بوليثرين للأسطح,اسمنتي للسرداب</td>  
                                   
                                </tr>   
                                <tr className="trDirection">
                                        <td className="drag-item">الأطقم الصحية</td>
                                        <td  className="drag-item">سعر الطقم لا ٌتجاوز ٦٠ د.ك</td>
                                        <td className="drag-item">سعر الطقم لا ٌتجاوز ١٢٠ د.ك</td>  
                                        <td className="drag-item">سعر الطقم ٣٠٠ د.ك</td>  
                                       
                                    </tr>   
                                    <tr className="trDirection">
                                            <td className="drag-item">الواجهات</td>
                                            <td  className="drag-item">مساح وسٌجما كي بي سي</td>
                                            <td className="drag-item">مساح وسٌجما همبل</td>  
                                            <td className="drag-item">مساح وسٌجما مع تطعيم حجر أو موزايك</td>  
                                           
                                        </tr>   
                                        <tr className="trDirection">
                                                <td className="drag-item">الصبغ</td>
                                                <td  className="drag-item">كي بي سي</td>
                                                <td className="drag-item">جوتن أو همبل</td>  
                                                <td className="drag-item">جوتن مع صبغ إيطالي للصالات والغرف الرئيسية</td>  
                                               
                                            </tr>   
                                            <tr className="trDirection">
                                                    <td className="drag-item">الألمونيوم</td>
                                                    <td  className="drag-item">قطاع 1.5 مم مع جام سنجل وإكسسوار صيني</td>
                                                    <td className="drag-item">قطاع 1.8 مم مع جام دبل عاكس وإكسسوار إيطالي</td>                  
                                                    <td className="drag-item">قطاع 1.8 مم مع جام دبل عاكس وإكسسوار إيطالي</td>                  
                                                   
                                                </tr>   
                                                <tr className="trDirection">
                                                        <td className="drag-item">الشتر</td>
                                                        <td  className="drag-item">لا يوجد</td>
                                                        <td className="drag-item">الشتر محلي الماكينة صيني</td>
                                                        <td className="drag-item">الشتر محلي الماكينة فرنسي</td>
                                                       
                                                    </tr>   
                                                    <tr className="trDirection">
                                                            <td className="drag-item">بورسلان الحمامات</td>
                                                            <td  className="drag-item">المتر لا يتجاوز دينار التركيب اسمنت أبيض</td>
                                                            <td className="drag-item">المتر لا ٌتجاوز ٢ د.ك التركيب اسمنت أبيض</td>
                                                            <td className="drag-item">المتر ٥ د.ك التركيب مواد لاصقة</td>
                                                           
                                                        </tr>   
                                                        <tr className="trDirection">
                                                                <td className="drag-item">أرضية الصالات</td>
                                                                <td  className="drag-item">المتر لا يتجاوز دينارونص التركيب اسمنت أبيض</td>
                                                                <td className="drag-item">المتر لا ٌتجاوز ٣ د.ك التركيب اسمنت أبيض</td>
                                                                <td className="drag-item">المتر ٨ د.ك التركيب مواد لاصقة</td>
                                                               
                                                            </tr>   
                                                            <tr className="trDirection">
                                                                    <td className="drag-item">أرضية الغرف</td>
                                                                    <td  className="drag-item">المتر لا يتجاوز دينار التركيب اسمنت أبيض</td>
                                                                    <td className="drag-item">المتر لا ٌتجاوز ٢ د.ك التركيب اسمنت أبيض</td>
                                                                    <td className="drag-item">المتر ٥ د.ك التركيب مواد لاصقة</td>
                                                                   
                                                                </tr>   
                                                                <tr className="trDirection">
                                                                        <td className="drag-item">الديكور</td>
                                                                        <td  className="drag-item">دهان رولتيكس بدون جبس</td>
                                                                        <td className="drag-item">ديكور سادة وكورنيش  للغرف وسقف نور مخفي للصالات والغرفة الرئيسية</td>
                                                                        <td className="drag-item">ديكور نور مخفي  للغرف تصميم داخلي  للصالات الغرف الرئيسية</td>
                                                                       
                                                                    </tr>   
                                                                    <tr className="trDirection">
                                                                        <td className="drag-item">باب المدخل</td>
                                                                        <td  className="drag-item"> ألمنيوم بقيمة لا تتجاوز ١٠٠ د.ك </td>
                                                                        <td className="drag-item">ألمنيوم أو حدٌد مشغول بقٌمة لا تتجاوز ٢٥٠ د.ك</td>
                                                                        <td className="drag-item">ألمنيوم أو حدٌد مشغول بقٌمة ١٠٠٠ د.ك</td>
                                                                       
                                                                    </tr>   
                                                                <tr className="trDirection">
                                                                    <td className="drag-item">الأبواب الداخلية</td>
                                                                    <td className="drag-item">خشب عادي مع إكسسوار صيني بما لا يتجاوز ٤٥ د.ك</td>
                                                                    <td className="drag-item">أبواب خشب مغلف بي في سي وارد شركة سديم أو الصراف </td>
                                                                    <td className="drag-item">أبواب خشب مغلف بي في سي وارد شركة سديم أو الصراف </td>
                                                                </tr>
                                                                <tr className="trDirection">
                                                                    <td className="drag-item">التكييف</td>
                                                                    <td className="drag-item">وحدات منفصلة</td>
                                                                    <td className="drag-item">مركزي ألاسكا</td>
                                                                    <td className="drag-item">مركزي كولٌكس أو ترين أو يورك</td>
                                                                </tr>
                                                                <tr className="trDirection">
                                                                    <td className="drag-item">المصعد</td>
                                                                    <td className="drag-item">لا يوجد</td>
                                                                    <td className="drag-item">كابينة محلية وماكينة إيطالية  بقيمة ٣٥٠٠  د.ك</td>
                                                                    <td className="drag-item">مصعد فوجي ماليزي تقنية يانانية</td>
                                                                </tr>
                                                                <tr className="trDirection">
                                                                    <td className="drag-item">الإنارة</td>
                                                                    <td className="drag-item">سبوتات بما لا يتجاوز ٥٠٠ فلس</td>
                                                                    <td className="drag-item">إنارات داخلية وخارجية إل إي دي, والسبوت لا يتجاوز ١ د.ك</td>
                                                                    <td className="drag-item">إنارات داخلية وخارجية إل إي دي, والسبوتات 3 د.ك, مع هدية معلقات في الصالات</td>
                                                                </tr>
                                                                <tr className="trDirection">
                                                                    <td className="drag-item">المخطط والرخصة والإشراف</td>
                                                                    <td className="drag-item">علي نفقة المالك</td>
                                                                    <td className="drag-item">على نفقة المقاول</td>
                                                                    <td className="drag-item">على نفقة المقاول مع تصميم واجهات تصميم داخلي مجانا</td>
                                                                </tr>

                                                                <tr className="trDirection">
                                                                            <td className=" drag-item">سعر المتر</td>
                                                                            <td  className="priceLight  drag-item ">١٠٥ دينار كويتي</td>
                                                                            <td  className=" priceMid drag-item">١٣٥ دينار كويتي</td>
                                                                            <td  className=" priceHigh drag-item">١٨٥ دينار كويتي</td>    
                                                                        </tr>   


                        </tbody>
                      
                                                                
                                                               

            </table>

         
    </section>
  <PaletteFooter />
   
   </div>
    )}

export default Prices;