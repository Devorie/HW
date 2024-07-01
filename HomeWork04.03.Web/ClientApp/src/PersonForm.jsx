import React from 'react';

class PersonForm extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-6 offset-md-2'>
                    <input type='text'
                        value={this.props.currentNumber}
                        onChange={this.props.onTextChange}
                        className='form-control'
                        placeholder='Enter Number' />
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-dark w-100' onClick={this.props.onAddClick}>Add</button>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-warning w-100' onClick={this.props.onClearClick}>Clear</button>
                </div>
            </div>

        )
    }

}

export default PersonForm;