import React from 'react'

interface Alert3Props {
    mcc: () => void;
}

const Alert3 = ({mcc}:Alert3Props) => {
  return (
    <div>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong className="text-danger">Pay attention...</strong> You should
          check in on some of those fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={mcc}
          ></button>
        </div>
    </div>
  )
}

export default Alert3