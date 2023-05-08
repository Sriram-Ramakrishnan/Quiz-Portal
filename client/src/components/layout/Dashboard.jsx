import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
const Dashboard = () => {
  
  const [name,setName] = useState("");

  async function getName(){
    try {
      const response = await fetch("http://localhost:5000/dashboard", {
        method: "GET",
        headers: {token: localStorage.token}
      })

      const parseRes = await response.json();
      setName(parseRes.user_name);
      
    } catch (err) {
      console.error(err.message); 
    }
  }

  useEffect(()=>{
    getName();
  })

  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Dashboard</h1>
          <p className="lead large">
            Hi {name}!
          </p>
          <p className="lead">
            Join in to attempt quizzes, improve your progress and learn at the same time!
          </p>
          <div className="buttons">
         
            <Link to="/quiz" className="btn btn-primary">
              Attempt Quiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
