import JaberAlAhmed from '../../assests/images/projects/JaberAlAhmed.jpg';
import Rabyia from '../../assests/images/projects/Rabyia.jpg';
import SabahAlAhmed from '../../assests/images/projects/SabahAlAhmed.jpg';
 import Jabryia from '../../assests/images/projects/Jabryia.jpg';
 import Fayha from '../../assests/images/projects/Fayha.jpg';
import Edelia from '../../assests/images/projects/Edelia.jpg';
 import Edelia2 from '../../assests/images/projects/Edelia2.jpg';
 import AlMasayel from '../../assests/images/projects/AlMasayel.jpg';
 import AlMasayelComputer from '../../assests/images/projects/AlMasayelComputer.jpg';
 import Egela from '../../assests/images/projects/Egela.jpg';
 import Egela2 from '../../assests/images/projects/Egela2.jpg';
 import Tower_building from '../../assests/images/projects/tower-building-مقاولات-الكويت.jpg';
 import Plans_kuwait from '../../assests/images/projects/سرداب-مقاولات-الكويت.jpg';
 import Plans_kuwaitـground from '../../assests/images/projects/أرضي-مقاولات-الكويت.jpg';
 import Plans_kuwaitـfirst from '../../assests/images/projects/أول-مقاولات-الكويت.jpg';
 import Plans_kuwaitـsecond from '../../assests/images/projects/ثاني-مقاولات-الكويت.jpg';
 import Industrial from '../../assests/images/projects/مقاولات-تجارية.jpg';
 import Industrial2 from '../../assests/images/projects/مقاولات-بناء-الكويت-مصنع.jpg';









const PROJECT_DATA = {
  projects: {
      id: 1,
      title: 'مقاولات سكنية',
      routeName: 'projects',
      items: [
        {
          id: 1,
          name: 'Jaber AlAhmed',
          imageUrl: `${JaberAlAhmed}`,
          price: '400M'
        },
        {
          id: 2,
          name: 'Rabyia',
          imageUrl: `${Rabyia}`,
          price: '100M'
        },
        {
          id: 3,
          name: 'Sabah AlAhmed',
          imageUrl: `${SabahAlAhmed}`,
          price: '400M'
        },
        {
          id: 4,
          name: 'Jabriya',
          imageUrl: `${Jabryia}`,
          price: '500M'
        },
        {
          id: 5,
          name: 'Fayha',
          imageUrl: `${Fayha}`,
          price: '500M'
        
        },
        {
          id: 7,
          name: 'Edelia',
          imageUrl: `${Edelia}`,
          price: '666M'
        },
        {
          id: 12,
          name: 'Edelia',
          imageUrl: `${Edelia2}`,
          price: '1000M'
        },
        {
          id: 13,
          name: '',
          imageUrl: `${Edelia2}`,
          price: '1000M'
        },
      
         
       
       
        
      ]
    },
  
    constructions: {
      id: 3,
      title: 'مقاولات بناء',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'المسايل',
          imageUrl: `${AlMasayel}`,
          price: "بناء الفلة"
        },
        {
          id: 19,
          name: 'المسايل',
          imageUrl: `${AlMasayelComputer}`,
          price: "التصميم"
        },
        {
          id: 20,
          name: 'العقيلة',
          imageUrl: `${Egela}`,
          price: "بناء الفلة"
        },
        {
          id: 21,
          name: 'العقيلة',
          imageUrl: `${Egela2}`,
          price: "تصميم الفلة"
        },
      
      ]
    },
        towers: {
          id: 3,
          title: 'مقاولات أبراج',
          routeName: 'jackets',
          items: [
            {
              id: 22,
              name: 'برج',
              imageUrl: `${Tower_building}`,
              price: "مقاولات"
            },
           
        
      ]
    },
    plans: {
      id: 3,
      title: 'مخططات',
      routeName: 'jackets',
      items: [
        {
          id: 24,
          name: ' سرداب',
          imageUrl: `${Plans_kuwait}`,
          price: "مخططات"
        },
        {
          id: 26,
          name: ' مسقط أرضي',
          imageUrl: `${Plans_kuwaitـground}`,
          price: "مخطط"
        },
        {
          id: 27,
          name: ' مسقط أول',
          imageUrl: `${Plans_kuwaitـfirst}`,
          price: "مخططات"
        },
        {
          id: 25,
          name: ' مسقط ثان',
          imageUrl: `${Plans_kuwaitـsecond}`,
          price: "مخطط"
        },
        
    
  ]
},
industrial: {
  id: 3,
  title: 'مقاولات تجارية',
  routeName: 'jackets',
  items: [
    {
      id: 24,
      name: 'مصنع',
      imageUrl: `${Industrial}`,
      price: "بناء"
    },
    {
      id: 25,
      name: 'مصنع',
      imageUrl: `${Industrial2}`,
      price: " مقاولات "
    },

]
},

   
    
};
  
  export default PROJECT_DATA;
  