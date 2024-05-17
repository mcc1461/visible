import React, { useState } from "react";

interface Alert2Props {
  onClose: () => void;
  onClickCase: () => boolean;
  result?: boolean;
}

const Alert2  = ({ onClose, onClickCase, result }: Alert2Props) => {
// const Alert2: React.FC<Alert2Props> = ({ onClose, onClickCase }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    const result = onClickCase();
    setShow(result);
    return result;
  };

  return (
    <>
      {show && (
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
            onClick={() => {
              handleClick();
              onClose();
              !result  && alert("You clicked the close button...");
            }}
          ></button>
        </div>
      )}
    </>
  );
};

export default Alert2;
