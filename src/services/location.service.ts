import { from, map, Observable, switchMap, combineLatest } from 'rxjs'
import { BASE_URL } from '@/env'
import { LocationModel } from '@/models/location.model'


const endpoint = 'location'
const pages = Array.from({length: 7}, (_, i) => i + 1);

export const getLocations = (): Observable<LocationModel[]> => {
  const url = `${BASE_URL}/${endpoint}`
  return combineLatest(pages.map( page => from(fetch(`${url}?page=${page}`)).pipe(
          switchMap((response) => response.json()),
          map((reponse: { results: LocationModel[] }) => reponse.results)
      ))
  ).pipe(
      map((reponse: any[]) => reponse.flatMap(_ => _))
  )
}

