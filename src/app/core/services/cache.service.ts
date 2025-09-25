import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private cacheMap: Map<string, any> = new Map();

  constructor() { }


  setCache(key: string, data: any, localStore: boolean) {
    this.cacheMap.set(key, data);
  }


  getCache(key: string) {
    return this.cacheMap.get(key);
  }


  deleteCache(key: string) {
    this.cacheMap.delete(key)
  }

  clearCache() {
    this.cacheMap = new Map();
  }
}
