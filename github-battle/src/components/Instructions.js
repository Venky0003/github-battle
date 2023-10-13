function Instructions() {
  return (
    <>
      <h1 className="fs-40 fw-600 text-center m-bottom-30">Instructions</h1>
      <div className="flex justify-between icons-box ">
        <div className="text-center">
          <p className="fs-20 fw-500 m-bottom-5">Enter Two GitHub Users</p>
          <button className="icons-common user-group">
            <i className="fa-solid fa-user-group"></i>
          </button>
        </div>
        <div  className="text-center">
          <p className="fs-20 fw-500  m-bottom-5">Start Battle</p>
          <button className="icons-common jet">
            <i className="fa-solid fa-jet-fighter"></i>
          </button>
        </div>
        <div  className="text-center">
          <p className="fs-20 fw-500  m-bottom-5">See the Winner</p>
          <button className="icons-common golden">
          <i className="fa-solid fa-trophy"></i>
          </button>
        </div>
      </div>
    </>
  );
}


export default Instructions;