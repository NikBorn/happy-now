export const switchFavorite = (locationInfo) => {
  locationInfo.isFavorite = !locationInfo.isFavorite;
  return locationInfo;
};