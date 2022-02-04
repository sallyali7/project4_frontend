import cover from '../assets/cover.jpg'

function WhoWeAre() {
  return (
    <body className="d-flex h-100 text-center text-white bg-dark">
      <img src={cover} className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" />
    
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>Tech-Connect</h1>
          <p className="text-center">Helping you find your career in Tech. Browse through all of our jobs and apply directly from our site. Head over to our articles page to stay up to date with the latest recruitment tips</p>
        </main>
      </div>
    </body>




  // <body>
  //   <img className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" src={cover} />
  //   <main className="px-3">
  //     <h1>Cover your page.</h1>
  //     <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
  //     <p className="lead">
  //     </p>
  //   </main>
  // </body>
  // <h1 className="display-1 text-center fw-bold lh-1 mb-3">Tech-Connect</h1>
  )
}

export default WhoWeAre