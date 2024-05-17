
interface Button2Props {
  onClick: () => void;
  result: boolean;
}

const Button2 = ({ onClick, result }: Button2Props) => {
  return (
    <button onClick={onClick} className={result ? "btn btn-danger" : "btn btn-primary"}>
      {result ? `Click "X" to close the warning...` : `Click here to show the warning...`}
    </button>
  );
};

export default Button2;
