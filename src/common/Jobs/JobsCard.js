import ButtonMailto from '../../NavbarFiles/mailto'

function JobCard({  title, companyName, jobDescription, salary, createdAt }) {
  return (
    <section>
      {/* <Link to={`/jobs/${jobId}`}> */}
      <div className="card text-center">
        <div className="card-header">
          {title}
        </div>
        <div className="card-body">
          <h5 className="card-title">{companyName}</h5>
          <p className="card-text">{jobDescription}</p>
          <a href="#" className="btn btn-primary"><ButtonMailto label="Apply" mailto="mailto:no-reply@example.com" /></a>
        </div>
        <div className="card-footer text-muted">
          Annual Salary £{createdAt, salary}
        </div>
      </div>
      {/* </Link> */}
    </section>

  )
}

export default JobCard