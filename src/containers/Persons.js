import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as actionType from "../store/actions";

class Persons extends Component {
  state = {
    persons: [],
  };

  personAddedHandler = () => {
    const newPerson = {
      id: Math.random(), // not really unique but good enough here!
      name: "Max",
      age: Math.floor(Math.random() * 40),
    };
    this.setState((prevState) => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

  personDeletedHandler = (personId) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.id !== personId),
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson
          personAdded={() => this.props.onAddPerson(this.props.person)}
        />
        {this.props.personsResults.map((personResult) => (
          <Person
            key={personResult.id}
            name={personResult.name}
            age={personResult.age}
            clicked={() => this.props.onDeletePerson(personResult.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    person: state.persons,
    personsResults: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPerson: (person) =>
      dispatch({ type: actionType.ADD_PERSON, person: person }),
    onDeletePerson: (id) =>
      dispatch({ type: actionType.DELETE_PERSON, personId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
