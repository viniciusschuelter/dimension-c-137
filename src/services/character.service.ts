import { from, map, Observable, switchMap } from 'rxjs'
import { CharacterModel } from '@/models/character.model'
import { BASE_URL } from '@/env'

export interface FilterQuery {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}

const endpoint = 'character'

export const getCharacters = (filters: FilterQuery): Observable<CharacterModel[]> => {
  const searchParams = Object.keys(filters).map((k) => `${k}=${filters[k]}`).join('&')
  const url = `${BASE_URL}/${endpoint}/?${searchParams}`
  return from(fetch(url)).pipe(
    switchMap((response) => response.json()),
    map((reponse: { results: CharacterModel[] }) => reponse.results)
  )
}
