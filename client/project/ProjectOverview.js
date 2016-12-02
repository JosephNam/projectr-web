import React, { PropTypes } from 'react'

export class ProjectOverview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='card'>
                        <div className='card-content'>
                            {this.props.project_description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
