import React from 'react'

const CardComponent = ({ image, title, description ,progress }) => {
  return (
    <div className="card mb-4 text-white">
            <img src={image} className="card-img-top" alt={title} style={{width : '50%'}} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="text">{description}</p>
                <div className="progress">
                    <div
                        className="progress-bar "
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {progress}%
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CardComponent
