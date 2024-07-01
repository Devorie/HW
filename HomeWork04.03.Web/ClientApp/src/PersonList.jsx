import React from 'react';

class PersonList extends React.Component {
    getClassName = currentAge => {
        if (currentAge > 65) {
            return 'text-danger';
        }

        return '';
    }

    getContent = () => {
        if (this.props.people.length === 0) {
            return <h2>Nothing to display....</h2>
        }
        return (
            <>
                <ul className='list-group'>
                    {this.props.people.map(person => <li className='list-group-item'>
                        <h1 className={this.getClassName(person.Age)}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.age}</td>
                        </h1>
                    </li>)}
                </ul>
            </>
        );
    }

    render() {
        return this.getContent();
    }
}

export default PersonList;