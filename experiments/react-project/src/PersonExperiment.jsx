import React from "react";
import "./components/PersonExperiment.css";



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }

  getRole() {
    return "Person";
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }

  getRole() {
    return "Student";
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  greet() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }

  getRole() {
    return "Teacher";
  }
}

/* ========== REACT COMPONENT ========== */

function PersonExperiment() {
  const people = [
    new Person("Alex Johnson", 30),
    new Student("Emma Watson", 20, "Computer Science"),
    new Teacher("Dr. James Wilson", 45, "Mathematics"),
  ];

  return (
    <div className="person-container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div className="person-card" key={index}>
          <h2>
            {person.name} ({person.getRole()})
          </h2>

          <p>Age: {person.age}</p>

          <p className="greet">{person.greet()}</p>

          {person.major && <p>Major: {person.major}</p>}
          {person.subject && <p>Teaching: {person.subject}</p>}
        </div>
      ))}
    </div>
  );
}

export default PersonExperiment;
