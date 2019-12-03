export const ActionTypes = {
  SET_ACTIVE_MODAL: 'SET_ACTIVE_MODAL',
  SET_LIKED_IMAGES: 'SET_LIKED_IMAGES'
}

export const closeAllModals = () => ({ type: ActionTypes.SET_ACTIVE_MODAL, modal: null })
export const openModal = ({ name, modalState, animation }) => ({
  type: ActionTypes.SET_ACTIVE_MODAL,
  modal: { name, modalState, animation }
})

export const setLikedImages = (images) => ({
  type: ActionTypes.SET_LIKED_IMAGES,
  images
})
