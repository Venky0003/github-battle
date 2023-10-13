import React from 'react';

function Result(props) {
  const { winner, looser, data1, data2 } = props;

  return (
    <div>
      <div className="flex justify-evenly">
        {winner === 'tie' && looser === 'tie' && (
          <>
            <div className="result-card m-top-30">
              <h2 className="fs-34 fw-400 text-center m-top-30">Tie</h2>
              <div className="text-center">
                <img
                  className="result-card-img m-top-30"
                  src={data1.avatar_url}
                  alt="github pic"
                />
              </div>
              <p className="text-center fw-600">Score :{props.user1Score}</p>
              <h2 className="login-id text-center m-top-30 fs-25 fw-600 m-bottom-20">
                {data1.login}
              </h2>
              <p className="fs-20">
                <i className="m-right-15 red fa-solid fa-user"></i>
                {data1.name}
              </p>
              <p className="fs-18">
                <i className="m-right-15 sky-blue fa-solid fa-location-crosshairs"></i>
                {data1.location}
              </p>
              <p className="fs-18">
                <i className="m-right-15 green fa-solid fa-users-line"></i>
                {data1.followers}
              </p>
              <p className="fs-18">
                <i className="m-right-15 red fa-solid fa-user-plus"></i>
                {data1.following}
              </p>
              <p className="fs-18">
                <i className="m-right-15 blue fa-regular fa-folder-open"></i>{' '}
                {data1.public_repos}
              </p>
            </div>
            {/* tie second card */}
            <div className="result-card m-top-30">
              <h2 className="fs-34 fw-400 text-center m-top-30">Tie</h2>
              <div className="text-center">
                <img
                  className="result-card-img m-top-30"
                  src={data2.avatar_url}
                  alt="github pic"
                />
              </div>
              <p className="text-center fw-600">Score :{props.user2Score}</p>
              <h2 className="login-id text-center m-top-30 fs-25 fw-600 m-bottom-20">
                {data2.login}
              </h2>
              <p className="fs-20">
                <i className="m-right-15 red fa-solid fa-user"></i>
                {data2.name}
              </p>
              <p className="fs-18">
                <i className="m-right-15 sky-blue fa-solid fa-location-crosshairs"></i>
                {data2.location}
              </p>
              <p className="fs-18">
                <i className="m-right-15 green fa-solid fa-users-line"></i>
                {data2.followers}
              </p>
              <p className="fs-18">
                <i className="m-right-15 red fa-solid fa-user-plus"></i>
                {data2.following}
              </p>
              <p className="fs-18">
                <i className="m-right-15 blue fa-regular fa-folder-open"></i>{' '}
                {data2.public_repos}
              </p>
            </div>
          </>
        )}

        {winner !== 'tie' && (
          <div className="result-card m-top-30">
            <h2 className="fs-34 fw-400 text-center m-top-30">Winner</h2>
            <div className="text-center">
              <img
                className="result-card-img m-top-30"
                src={winner === 'user1' ? data1.avatar_url : data2.avatar_url}
                alt="github pic"
              />
            </div>
            <p className="text-center fw-600">
              Score : {winner === 'user1' ? props.user1Score : props.user2Score}
            </p>
            <h2 className="login-id text-center m-top-30 fs-25 fw-600 m-bottom-20">
              {winner === 'user1' ? data1.login : data2.login}
            </h2>
            <div>
              <p className="fs-20 fw-500">
                <i className="m-right-15  red fa-solid fa-user"></i>
                {winner === 'user1' ? data1.name : data2.name}
              </p>
              <p className="fs-18 fw-500">
                <i className="m-right-15 sky-blue fa-solid fa-location-crosshairs"></i>
                {winner === 'user1' ? data1.location : data2.location}
              </p>
              <p className="fs-18 fw-500">
                <i className="m-right-15 green fa-solid fa-users-line"></i>
                {winner === 'user1' ? data1.followers : data2.followers}
              </p>
              <p className="fs-18 fw-500">
                <i className="m-right-15 red fa-solid fa-user-plus"></i>
                {winner === 'user1' ? data1.following : data2.following}
              </p>
              <p className="fs-18 fw-500">
                <i className="m-right-15 blue fa-regular fa-folder-open"></i>{' '}
                {winner === 'user1' ? data1.public_repos : data2.public_repos}
              </p>
            </div>
          </div>
        )}

        {looser !== 'tie' && (
          <div className="result-card m-top-30">
            <h2 className="fs-34 fw-400 text-center m-top-30">Looser</h2>
            <div className="text-center">
              <img
                className="result-card-img m-top-30"
                src={looser === 'user1' ? data1.avatar_url : data2.avatar_url}
                alt="github pic"
              />
            </div>
            <p className="text-center fw-600">
              Score : {looser === 'user1' ? props.user1Score : props.user2Score}
            </p>
            <h2 className="login-id text-center m-top-30 fs-25 fw-600 m-bottom-20">
              {looser === 'user1' ? data1.login : data2.login}
            </h2>
            <p className="fs-20">
              <i className="m-right-15 red fa-solid fa-user"></i>
              {looser === 'user1' ? data1.name : data2.name}
            </p>
            <p className="fs-18">
              <i className="m-right-15 sky-blue fa-solid fa-location-crosshairs"></i>

              {looser === 'user1' ? data1.location : data2.location}
            </p>
            <p className="fs-18">
              <i className="m-right-15 green fa-solid fa-users-line"></i>

              {looser === 'user1' ? data1.followers : data2.followers}
            </p>
            <p className="fs-18">
              <i className="m-right-15 red fa-solid fa-user-plus"></i>

              {looser === 'user1' ? data1.following : data2.following}
            </p>
            <p className="fs-18">
              <i className="m-right-15 blue fa-regular fa-folder-open"></i>{' '}
              {looser === 'user1' ? data1.public_repos : data2.public_repos}
            </p>
          </div>
        )}
      </div>
      <div className="text-center m-top-30">
        <button
          className="fs-18 padding bg-black color-white no-border
        "
          onClick={props.handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Result;
