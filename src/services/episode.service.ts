import { from, map, Observable, switchMap } from 'rxjs'
import { BASE_URL } from '@/env'
import { EpisodeModel } from '@/models/episode.model'

const endpoint = 'episode'

export const getEpisodes = (): Observable<EpisodeModel[]> => {
  const url = `${BASE_URL}/${endpoint}`
  return from(fetch(url)).pipe(
    switchMap((response) => response.json()),
    map((reponse: { results: EpisodeModel[] }) => reponse.results)
  )
}
