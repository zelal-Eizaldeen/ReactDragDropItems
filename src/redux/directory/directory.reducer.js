 import arch from '../../assests/images/arch.svg';
 import interior from '../../assests/images/interior.svg';
 import con from '../../assests/images/con.svg';

 


const INITIAL_STATE = {
    sections: [
        {
          title: ' التصميم الداخلي',

          imageUrl: `${interior}`,
          id: 1,
          linkUrl: 'interior'
        },
        {
          title: ' تنفيذ المشاريع',
          imageUrl: `${con}`,
          id: 2,
          linkUrl: 'constructions'
        },
        {
          title: ' الهندسة المعمارية',

          imageUrl: `${arch}`,
          id: 3,
          linkUrl: 'projects/towers'
        },
        // {
        //   title: 'مخططات ',
        //   imageUrl: `${Plans_kuwait}`,
        //   id: 4,
        //   linkUrl: 'projects/plans'
        // },
        // {
        //   title: ' مقاولات تجارية',
        //   imageUrl: `${Industrial}`,
        //   id: 5,
        //   linkUrl: 'projects/industrial'
        // },
       
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;