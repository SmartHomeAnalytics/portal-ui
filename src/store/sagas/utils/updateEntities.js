import { put, all } from 'redux-saga/effects'
import { isEmpty, pick } from 'ramda'

import { updateTests } from '../../actions/tests'
import { updatePersons } from '../../actions/person'

const map = {
  tests: updateTests,
  person: updatePersons,
}

const mapKeys = Object.keys(map)

export default function* updateEntities(entities = {}, params = {}) {
  const entitiesWithMapping = pick(mapKeys, entities)
  yield all(
    Object.entries(entitiesWithMapping)
      .map(([key, entity = {}]) => {
        if (Object.prototype.hasOwnProperty.call(entity, undefined)) {
          const { undefined: omit, ...validEntities } = entity
          return [key, { ...validEntities }]
        }
        return [key, entity]
      })
      .filter(([, entity]) => !isEmpty(entity))
      .map(([key, entity]) => {
        const updateFunction = map[key]
        const additionalParams = params[key] || []
        return put(updateFunction(entity, ...additionalParams))
      }),
  )
}
