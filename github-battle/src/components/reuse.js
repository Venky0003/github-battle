{/* <div>
          <h1>Github Battle App</h1>

          <form onSubmit={this.handleSubmitOne}>
            <input
              type="text"
              placeholder="Enter GitHub username 1"
              value={this.state.user1}
              onChange={(e) => this.handleChange(e, 'user1')}
            />
            <button type="submit">Submit</button>
          </form>
          <form className="m-top-30" onSubmit={this.handleSubmitTwo}>
            <input
              type="text"
              placeholder="Enter GitHub username 1"
              value={this.state.user2}
              onChange={(e) => this.handleChange(e, 'user2')}
            />
            <button type="submit">Submit</button>
          </form>
          <div>{data1 && <p>{data1.name}</p>}</div>
          <div>{data2 && <p>{data2.name}</p>}</div>
          <button onClick={this.calculateWinner}>Calculate Winner</button>
          {winner && (
            <div>
              <h2>winner</h2>
              <img
                src={winner === 'user1' ? data1.avatar_url : data2.avatar_url}
                alt="github pic"
              />
              <h2>{winner === 'user1' ? data1.name : data2.name}</h2>
              <p>{winner === 'user1' ? data1.followers : data2.followers}</p>
              <p>
                {winner === 'user1' ? data1.public_repos : data2.public_repos}
              </p>
              <p>{winner === 'user1' ? data1.following : data2.followingt}</p>
              {/* <p>Public Repos: {data1.public_repos || data2.public_repos}</p> 
           </div>*/}
       //   )}

        //   {looser && (
        //     <div>
        //       <h2>looser</h2>
        //       <img
        //         src={looser === 'user1' ? data1.avatar_url : data2.avatar_url}
        //         alt="github pic"
        //       />
        //       <h2>{looser === 'user1' ? data1.name : data2.name}</h2>
        //       <p>{looser === 'user1' ? data1.followers : data2.followers}</p>
        //       <p>
        //         {looser === 'user1' ? data1.public_repos : data2.public_repos}
        //       </p>
        //       <p>{looser === 'user1' ? data1.following : data2.followingt}</p>
        //     </div>
        //   )}
     //   </div> */}





    //  ============================


    // {winner === "It's a tie!" && (
    //   <div className="result-card m-top-30">
    //     <h2 className="fs-34 fw-400 text-center m-top-30">Tie</h2>
    //     {/* ...display any additional content specific to a tie */}
    //   </div>
    // )}.












    {/* <BrowserRouter>
    <div className="container">
      <Navbar /> 
      <Route path="/battle" component={Battle}>
        <Battle />
      </Route>
      <Route path="/" exact component={App}>
        <App />
      </Route>
    </div>
  </BrowserRouter> */}