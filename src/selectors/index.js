/* eslint-disable import/prefer-default-export */
/**
 * Fonction permettant de trouver l'id le plus haut dans le tableau
 * passé en paramètre
 * @param {Array} array
 * @returns {number} maxID
 */
export const getHighestId = (array) => {
  const ids = array.map((item) => item.id);
  const maxID = ids.length === 0 ? 0 : Math.max(...ids);
  return maxID;
};
