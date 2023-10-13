import React from 'react';
import Loader from './Loader';

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      activeButton: 'All',
    };
  }

  handleFetch = async (language) => {
    this.setState({ activeButton: language });

    let url = 'https://api.github.com/search/repositories?q=stars:%3E1';

    if (language !== 'All') {
      url += `+language:${language}`;
    }

    url += '&sort=stars&order=desc&type=Repositories';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ data: data });
    } catch (error) {
      console.log('Error fetching Data', error);
    }
  };

  getButtonColor = (language) => {
    // console.log(language);
    return this.state.activeButton === language ? 'red' : '';
  };

  componentDidMount() {
    this.handleFetch('All');
  }

  render() {
    const { data } = this.state;
    return (
      <>
        {!data && <Loader />}
        {data && (
          <div>
            <div className="text-center m-bottom-20">
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15 ${this.getButtonColor(
                  'All'
                )}`}
                onClick={() => this.handleFetch('All')}
              >
                All
              </button>
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15 ${this.getButtonColor(
                  'JavaScript'
                )}`}
                onClick={() => this.handleFetch('JavaScript')}
              >
                JavaScript
              </button>
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15 ${this.getButtonColor(
                  'Ruby'
                )}`}
                onClick={() => this.handleFetch('Ruby')}
              >
                Ruby
              </button>
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15  ${this.getButtonColor(
                  'Java'
                )}`}
                onClick={() => this.handleFetch('Java')}
              >
                Java
              </button>
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15 ${this.getButtonColor(
                  'CSS'
                )}`}
                onClick={() => this.handleFetch('CSS')}
              >
                CSS
              </button>
              <button
                className={`fs-18 fw-600 no-border bg-white m-right-15 ${this.getButtonColor(
                  'Python'
                )}`}
                onClick={() => this.handleFetch('Python')}
              >
                Python
              </button>
            </div>

            <div className="grid">
              {data.items.map((info, i) => {
                return (
                  <div className="items" key={info.id}>
                    <h4 className="fs-25 fw-500 text-center m-bottom-10">
                      #{i + 1}
                    </h4>
                    <div className="text-center">
                      <div className="m-bottom-10">
                        <img
                          className="popular-img"
                          src={info.owner.avatar_url}
                          alt="stars pic"
                        />
                      </div>
                      <a
                        className="fs-22 fw-500"
                        href={info.owner.html_url}
                        target="blank"
                      >
                        {info.owner.login}
                      </a>
                    </div>
                    <div className="m-top-30">
                      <h2 className="fs-18 fw-600 m-bottom-5 ">
                        <i className="red m-right-5 fa-solid fa-user-group"></i>
                        {info.owner.login}
                      </h2>
                      <p className="fs-18 fw-500 m-bottom-5">
                        <i className="golden  m-right-5 fa-solid fa-star"></i>
                        {info.stargazers_count}
                      </p>
                      <p className="fs-18 fw-500 m-bottom-5">
                        <i className=" blue m-right-5 fa-solid fa-code-fork"></i>
                        {info.forks_count}
                      </p>
                      <p className="fs-20 m-bottom-5">
                        <i className="m-right-5 red fa-solid fa-triangle-exclamation"></i>
                        {info.open_issues_count}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Popular;
