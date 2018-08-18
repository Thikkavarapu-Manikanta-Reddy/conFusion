import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Restangular } from 'ngx-restangular';
@Injectable({
  providedIn: 'root'
})

export class PromotionService {

  constructor(private restangular: Restangular) { }

   getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('promotions').getList();
  }


  getPromotion(id: number): Observable<Promotion> {
    return  this.restangular.one('promotions', id).get();
  }


getFeaturedPromotion(): Observable<Promotion> {
     return this.restangular.all('promotions').getList({featured: true})
      .pipe(map(promotions => promotions[0]));
  }

}
