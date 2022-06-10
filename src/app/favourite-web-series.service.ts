import { Injectable } from '@angular/core';
import { FAVOURITE_WEB_SERIES } from './data/mock-favourite-web-series';
import { Content } from './models/content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouriteWebSeriesService {

  constructor() { }

  getFavouriteWebSeriesList(): Observable<Content[]> {
    const favourite_web_series = of(FAVOURITE_WEB_SERIES);
    return favourite_web_series;
  }

  addFavouriteWebSeries(content: Content): Observable<Content[]> {
    FAVOURITE_WEB_SERIES.push(content)
    const finalList = of(FAVOURITE_WEB_SERIES);
    return finalList;
  }

  getFavouriteWebSeriesContent(id: number): Observable<Content> {
    let contentItemIndex = FAVOURITE_WEB_SERIES.findIndex((data) => data.id === id);
    if (contentItemIndex != -1) {
      return of(FAVOURITE_WEB_SERIES[contentItemIndex]);
    } else {
      let noContentItem = {
        id: -1,
        title: "No Content Found",
        body: "",
        author:
          "No Author Found",
      }
      return of(noContentItem);
    };
  }

  updateFavouriteWebSeries(content: Content): Observable<Content[]> {

    let contentItemIndex = FAVOURITE_WEB_SERIES.findIndex((data) => data.id === content.id);
    if (contentItemIndex != -1) {
      if (content.id)
        FAVOURITE_WEB_SERIES[contentItemIndex].id = content.id;
      if (content.title)
        FAVOURITE_WEB_SERIES[contentItemIndex].title = content.title;
      if (content.body)
        FAVOURITE_WEB_SERIES[contentItemIndex].body = content.body;
      if (content.author)
        FAVOURITE_WEB_SERIES[contentItemIndex].author = content.author;
      if (content.imagelink)
        FAVOURITE_WEB_SERIES[contentItemIndex].imagelink = content.imagelink;
      if (content.type)
        FAVOURITE_WEB_SERIES[contentItemIndex].type = content.type;
      if (content.hashtags)
        FAVOURITE_WEB_SERIES[contentItemIndex].hashtags = content.hashtags;
      let data = [...FAVOURITE_WEB_SERIES, content];
      const finalList = of(data);
      return finalList;
    } else {
      const finalList = of(FAVOURITE_WEB_SERIES);
      return finalList;
    }

  }

  removeFavouriteWebSeries(id: number) {
    let contentItemIndex = FAVOURITE_WEB_SERIES.findIndex((data) => data.id === id);
    if (contentItemIndex != -1) {
      let contentItem = FAVOURITE_WEB_SERIES[contentItemIndex];
      FAVOURITE_WEB_SERIES.splice(0, contentItemIndex);
      return contentItem;
    } return;
  }

}
