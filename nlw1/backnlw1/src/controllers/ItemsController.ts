import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');
    // Para transformar dados para novo formato mais acessivel
    const serializedItems = await items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: `http://192.168.0.80:3333/uploads/${item.image}`
      }
    });
  
    return response.json(serializedItems)
  }
}

export default ItemsController;