import Anjava from '../../assests/images/projects/Anjava.jpg';
 import Egela from '../../assests/images/projects/Egela.jpg';
 import Tower_building from '../../assests/images/projects/tower-building-مقاولات-الكويت.jpg';
 import Plans_kuwait from '../../assests/images/projects/سرداب-مقاولات-الكويت.jpg';
 import Industrial from '../../assests/images/projects/مقاولات-تجارية.jpg';


const INITIAL_STATE = {
    sections: [
        {
          title: 'مقاولات سكنية',
          imageUrl: `${Anjava}`,
          id: 1,
          linkUrl: 'projects/projects'
        },
        {
          title: 'مقاولات بناء',
          imageUrl: `${Egela}`,
          id: 2,
          linkUrl: 'projects/constructions'
        },
        {
          title: 'مقاولات أبراج',
          imageUrl: `${Tower_building}`,
          id: 3,
          linkUrl: 'projects/towers'
        },
        {
          title: 'مخططات ',
          imageUrl: `${Plans_kuwait}`,
          id: 4,
          linkUrl: 'projects/plans'
        },
        {
          title: ' مقاولات تجارية',
          imageUrl: `${Industrial}`,
          id: 5,
          linkUrl: 'projects/industrial'
        },
       
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;