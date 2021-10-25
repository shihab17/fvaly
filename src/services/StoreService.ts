import requests from './httpService';

class StoreService {
  getStores(): Promise<any> {
    return requests.get('/store');
  }

  getStoresById(id: string): Promise<any> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<any> {
    return requests.post(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<any> {
    return requests.patch(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<any> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
