import React from 'react';

function Form(props) {
  const handleButtonWinner = () => {
    props.calculateWinner();
    props.handleState('entry', !props.entry);
  };

  const { data1, data2, user1, user2 } = props;

  return (
    <div className="players-box">
      <h2 className="player-header text-center">Players</h2>

      <div className="flex justify-between">
        {!data1 ? (
          <div>
            <h4 className="fs-18 fw-500">Player One</h4>
            <form className="form1" onSubmit={(e) => props.handleSubmit(e, 1)}>
              <input
                className="player-username"
                type="text"
                placeholder="Enter GitHub username"
                value={user1}
                onChange={(e) => props.handleChange(e, 'user1')}
              />
              <input
                type="submit"
                value="Submit"
                className={`btn-submit ${user1 ? 'btn-active' : ''}`}
                disabled={!user1}
              />
            </form>
          </div>
        ) : (
          <div className="card flex justify-between align-center">
            <img
              className="card-img"
              src={data1.avatar_url}
              alt={data1.login}
            />
            <button
              onClick={() => {
                console.log('X button clicked');
                props.handleState('data1', null);
                props.handleState('user1');
              }}
            >
              X
            </button>
          </div>
        )}
        {!data2 ? (
          <div>
            <h4 className="fs-18 fw-500">Player Two</h4>
            <form onSubmit={(e) => props.handleSubmit(e, 2)}>
              <input
                className="player-username"
                type="text"
                placeholder="Enter GitHub username"
                value={user2}
                onChange={(e) => props.handleChange(e, 'user2')}
              />
              <button
                className={`btn-submit ${user2 ? 'btn-active' : ''}`}
                disabled={!user2}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="card flex justify-between align-center">
            <img
              className="card-img"
              src={data2.avatar_url}
              alt={data2.login}
            />
            <button
              onClick={() => {
                console.log('X button clicked');
                props.handleState('data2', null);
                props.handleState('user2');
              }}
            >
              X
            </button>
          </div>
        )}
      </div>
      <div>
        {data1 && data2 ? (
          <div className="text-center m-top-30">
            <button
              className=" fs-20 no-border padding bg-black color-white"
              onClick={handleButtonWinner}
            >
              Battle
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
  // }
}

export default Form;
