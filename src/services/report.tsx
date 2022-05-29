//#region Imports

import { MainCardProxy } from '../models/main-card.proxy';
import { MainGraphicProxy } from '../models/main-graphic.proxy';
import { MainTableProxy } from '../models/main-table.proxy';

//#endregion

// TODO: separar essa variável de ambiente em um arquivo local e adicionar suporte para ambientes em produção
const API_BASE = 'http://localhost:3000';

const basicFetch = async (endpoint: string) => {
  const req = await fetch(`${ API_BASE }/report/${ endpoint }`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await req.json();
};

export default {
  getCardsInfo: async (): Promise<MainCardProxy[]> => {
    return await basicFetch('cards') as MainCardProxy[];
  },

  getGraphicInfo: async (): Promise<MainGraphicProxy[]> => {
    return await basicFetch('graphics') as MainGraphicProxy[];
  },

  getTableInfo: async (): Promise<MainTableProxy[]> => {
    return await basicFetch('table') as MainTableProxy[];
  },
};
