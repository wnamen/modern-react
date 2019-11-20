export const updateActiveRoute = (activeRoute: any) => (dispatch: any) => {
  dispatch({ type: 'UPDATE_ACTIVE_ROUTE', activeRoute });
  const contentContainer = document.getElementById('content-container');
  if (contentContainer) {
    contentContainer.scrollTo(0, 0);
  }
};
