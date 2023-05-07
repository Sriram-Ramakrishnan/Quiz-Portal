import React from "react";
import { Link, Router } from "react-router-dom";
const Dashboard = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Dashboard</h1>
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
