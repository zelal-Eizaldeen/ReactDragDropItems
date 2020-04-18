import {createSelector} from 'reselect';

const selectProject = state => state.project;

export const selectCollections = createSelector(
    [selectProject],
    project => project.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  
  export const selectCollection = collectionUrlParam =>
    createSelector(
      [selectCollections],
      collections => collections[collectionUrlParam]
    );