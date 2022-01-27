import React from 'react'
import { getAllJobs } from '../../lib/api'
import JobCard from './JobsCard'
import Error from '../Error'
import Loading from '../Loading'

function Jobs (){
  const [jobs, setJobs] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !jobs && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllJobs()
        setJobs(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  return (
    <section className="section">
      <div className="container">
        {isError && <Error />}
        {isLoading && <Loading />}
        <div className="columns is-multiline">
          {jobs &&
            jobs.map(job => (
              <JobCard
                key={job.id}
                jobId={job.id}
                companyName={job.companyName}
                jobDescription={job.jobDescription}
                salary={job.salary}
                createdAt={job.createdAt}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs