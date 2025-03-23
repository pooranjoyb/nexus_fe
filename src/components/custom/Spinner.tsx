function Spinner() {
  return (
    <div className="w-full justify-center ">
      <div className="spinner">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="spinner-blade" key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default Spinner;
