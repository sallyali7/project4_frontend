import ButtonMailto from '../../navbarfiles/mailto'

function JobCard({  title, companyName, jobDescription, salary, createdAt }) {
  return (
    <section>
      <div className="card text-center">
        <div className="card-header">
          {title}
        </div>
        <div className="card-body jobbody">
          <h5 className="card-title text-primary">{companyName}</h5>
          <p className="card-text">{jobDescription}</p>
          <button className="btn btn-outline-primary btn-md px-5"><ButtonMailto label="Apply" mailto="mailto:no-reply@example.com"  /></button>
        </div>
        <div className="card-footer text-muted text-md-left">
    Annual Salary £{createdAt, salary} 
        </div>
      </div>
    </section>
  )
}





export default JobCard