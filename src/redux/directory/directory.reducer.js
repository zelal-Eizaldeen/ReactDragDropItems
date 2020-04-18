
const INITIAL_STATE = {
    sections: [
        {
          title: 'Projects',
          imageUrl: 'https://i2.wp.com/www.ies-constructions.com/wp-content/uploads/2019/06/Almasayel-project.jpg?ssl=1',
          id: 1,
          linkUrl: 'projects/projects'
        },
        {
          title: 'Towers',
          imageUrl: '',
          id: 2,
          linkUrl: 'projects/towers'
        },
        {
          title: 'Constructions',
          imageUrl: '',
          id: 3,
          linkUrl: 'projects/constructions'
        },
        {
          title: 'Plans',
          imageUrl: '',
          size: 'large',
          id: 4,
          linkUrl: 'projects/plans'
        },
        {
          title: 'Designs',
          imageUrl: '',
          size: 'large',
          id: 5,
          linkUrl: 'projects/designs'
        }
      ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default directoryReducer;