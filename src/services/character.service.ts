import { from, Observable} from 'rxjs'
import { CharacterModel } from '../models/character.model'
import { BASE_URL } from '../env'
import { map, switchMap} from "rxjs/operators";

export interface FilterQuery {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
  page?: number
}

const endpoint = 'character'

export const getCharacters = (filters: FilterQuery): Observable<{ results: CharacterModel[] }> => {
  const searchParams = Object.keys(filters).map((k) => `${k}=${filters[k]}`).join('&')
  const url = `${BASE_URL}/${endpoint}/?${searchParams}`
  return from(fetch(url)).pipe(
    switchMap((response) => response.json()),
    map((reponse: { results: CharacterModel[] }) => reponse)
  )
}


export const getMultiCharacters = (chars: string[]): Observable<CharacterModel[]> => {
  const url = `${BASE_URL}/${endpoint}/${chars.join(',')}`
  return from(fetch(url)).pipe(
      switchMap((response) => response.json()),
      map((reponse: CharacterModel[] ) => reponse)
  )
}
