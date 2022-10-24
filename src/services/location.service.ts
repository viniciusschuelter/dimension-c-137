import { from, map, Observable, switchMap } from 'rxjs'
import { BASE_URL } from '@/env'
import { LocationModel } from '@/models/location.model'

const endpoint = 'location'

export const getLocations = (): Observable<LocationModel[]> => {
  const url = `${BASE_URL}/${endpoint}`
  return from(fetch(url)).pipe(
    switchMap((response) => response.json()),
    map((reponse: { results: LocationModel[] }) => reponse.results)
  )
}
