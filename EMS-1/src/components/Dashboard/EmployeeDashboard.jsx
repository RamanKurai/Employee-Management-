import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../Tasklist/TaskList";
const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header   changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data}/>
      <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;
