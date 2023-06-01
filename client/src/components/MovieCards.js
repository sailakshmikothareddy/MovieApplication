import React from 'react'

const MovieCards = (props) => {
    console.log('releaseDate',props)
  return (
    <div >
    {/* // <div className='container' st>
    //     <div className='row'>
    //         <div className='col-sm-4'>
    //             <div className='card'>
    //                 <div className='card-body'> */}
<h5 className='card-title'>{props.name}</h5>
<p className='card-text'>Release Date:{props.release_Date}</p>
<p className='card-text'>Rating:{props.rating}</p>
        {/* //             </div> */}
    
     {/* <div class="card">
// <div class="card-header">
//     <h2>{props.name}</h2>
// </div>
// <span>{props.rating}</span>
//       </div>
//       <div class='card-body'>
//         <p> {props.releaseDate}</p>
//       </div> */}
    </div>
  )
}

export default MovieCards
