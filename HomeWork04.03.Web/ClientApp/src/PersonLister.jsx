import React from 'react';
import PersonForm from './PersonForm';
import PersonList from './PersonList';

class PersonLister extends React.Component {

    state = {
        currentFirstName: '',
        currentLastName: '',
        currentAge: '',
        people: []
    }

    onTextboxChangeFirstName = e => {
        this.setState({ currentFirstName: e.target.value });
    }

    onTextboxChangeLastName = e => {
        this.setState({ currentLastName: e.target.value });
    }

    onTextboxChangeAge = e => {
        this.setState({ currentAge: e.target.value });
    }

    onClearClick = () => {
        this.setState({ currentFirstName: '', currentLastName: '', currentAge:'', numbers: [] });
    }

    onAddClick = () => {
        const Person = {
            FirstName: this.state.currentFirstName,
            LastName: this.state.currentLastName,
            Age: this.state.currentAge
        }
        const copy = [...this.state.people, Person];
        this.setState({ people: copy, currentFirstName: '', currentLastName: '', currentAge: '' })
    }

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm
                    currentFirstName={this.state.currentFirstName}
                    currentLastName={this.state.currentLastName}
                    currentAge={this.state.currentAge}
                    onTextboxChangeFirstName={this.onTextboxChangeFirstName}
                    onTextboxChangeLastName={this.onTextboxChangeLastName}
                    onTextboxChangeAge={this.onTextboxChangeAge}
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick} />
                <PersonList people={this.state.people} />
            </div>
        )
    }
}

export default PersonLister;