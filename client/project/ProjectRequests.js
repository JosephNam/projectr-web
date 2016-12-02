import React, { PropTypes } from 'react'

export class ProjectRequests extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            requests: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:1337/api/projects/' + this.props.project_id + '/requests'
        fetch(url, {
            headers: {
                'Projectr-Token': sessionStorage.getItem('projectrToken')
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.success) {
                this.setState({
                    requests: json.result.project_requests
                })
                console.log(json.result.project_requests)
            }
        })
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <ul className='collection'>
                        {this.state.requests.map((r, i) => {
                            return <JoinRequest {...r} project_id={this.props.project_id} key={i}> </JoinRequest>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export class JoinRequest extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            handled: false
        }
    }

    accept() {
        this.handleRequest(true)
    }

    reject() {
        this.handleRequest(false)
    }

    handleRequest(approved) {
        const url = 'http://localhost:1337/api/projects/' + this.props.project_id + '/requests/handle'
        const body = JSON.stringify({
            username_to_approve: this.props.requesting_user,
            approved
        })
        fetch(url, {
            method: 'POST',
            body,
            headers : {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Projectr-Token': sessionStorage.getItem('projectrToken')
            }
        })
        .then(response => response.json())
        .then(json => {
            if (json.success) {
                this.setState({
                    handled: true,
                    approved
                })
            }
        })
        .catch(err => console.log(err))
        
    }

    render() {
        const d = new Date(this.props.requested_on)
        return this.state.handled ? <HandledRequest approved={this.state.approved} {...this.props}> </HandledRequest> : (
            <li className='collection-item avatar'>
                <p className="letter circle" style={{top: '25%', background: '#' + Math.floor(Math.random()*16777215).toString(16)}} 
                    data-letters={this.props.requesting_user.substring(0, 2)} ></p>
                <span className='title'><b> {this.props.requesting_user} </b> </span>
                <p className='separate-bottom'>
                    {this.props.requesting_user_first_name + ' ' + this.props.requesting_user_last_name}
                    <br />
                    {(d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear()}
                </p>

                <p className='description separate-top'>
                        {this.props.request_message}
                </p>
                <a className='secondary-content'>
                    <i className='material-icons handle reject' title='Reject' onClick={this.reject.bind(this)}>clear</i>
                    <i className='material-icons handle accept' title='Accept' onClick={this.accept.bind(this)}>check</i>
                </a>
            </li>
        )
    }
}

class HandledRequest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const string = this.props.approved ? 'Added ' + this.props.requesting_user : 'Rejected ' + this.props.requesting_user
        return (
            <li className='collection-item'>
                {string}
            </li>
        )
    }

}