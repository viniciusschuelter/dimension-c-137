import { combineLatest, from, Observable } from 'rxjs'
import { BASE_URL } from '../env'
import { EpisodeModel } from '../models/episode.model'
import { map, switchMap } from 'rxjs/operators'

const endpoint = 'episode'
const pages = Array.from({ length: 3 }, (_, i) => i + 1)

export const getEpisodes = (): Observable<EpisodeModel[]> => {
  const url = `${BASE_URL}/${endpoint}`
  return combineLatest(
    pages.map((page) =>
      from(fetch(`${url}?page=${page}`)).pipe(
        switchMap((response) => response.json()),
        map((reponse: { results: EpisodeModel[] }) => reponse.results)
      )
    )
  ).pipe(map((reponse: any[]) => reponse.flatMap((_) => _)))
}
