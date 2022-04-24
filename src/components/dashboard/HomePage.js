import React from 'react'
import { Button, CircularProgress, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, prop } from 'ramda'

import { fetchTests } from '../../store/actions/tests'
import { getMultipleTests, getTestsIsLoading, getTestsList } from '../../store/reducers/tests'
import { getCurrentUser, getPersonIsLoading } from '../../store/reducers/person'

const HomePage = () => {
  const dispatch = useDispatch()
  const testIds = useSelector(getTestsList)
  const tests = useSelector(getMultipleTests(testIds))
  const isLoading = useSelector(getTestsIsLoading)
  const personIsLoading = useSelector(getPersonIsLoading)
  const currentUser = useSelector(getCurrentUser)

  const fetch = () => {
    dispatch(fetchTests())
  }

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography>Home</Typography>
      </Grid>

      {(!tests || isEmpty(tests)) && (
        <Grid item>
          <Button onClick={fetch}>Fetch tests</Button>
        </Grid>
      )}

      {tests && (
        <Grid item>
          <Typography>{tests.map(prop('name')).join(', ')}</Typography>
        </Grid>
      )}

      {currentUser && (
        <Grid item>
          <Typography>Current user:</Typography>
          <Typography>{JSON.stringify(currentUser)}</Typography>
        </Grid>
      )}

      {isLoading && (
        <Grid item>
          <CircularProgress />
        </Grid>
      )}

      {personIsLoading && (
        <Grid item>
          <Typography>Current loading indicator</Typography>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  )
}

export default HomePage
