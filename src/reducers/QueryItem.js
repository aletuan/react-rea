import data from './data.json';

export default (cardId) => data.results.filter(s => s.id == cardId).concat(data.saved.filter(s => s.id == cardId));
