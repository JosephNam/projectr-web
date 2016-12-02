import React, { PropTypes } from 'react'
import {Tag} from './../../match/ProjectMatchContainer'

export class TagsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        tags: json.result.project_tags
                    })
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <span className="card-title">
                            <p>{this.props.title} ({this.state.tags.length})</p>
                        </span>
                        <br />
                        <div className='row card-final'>
                            <div className='col s12 center'>
                                {this.state.tags.map((t, i) => {
                                    return <Tag {...t} key={i}> </Tag>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <TagSearchComponent> </TagSearchComponent>
            </div>
           
        )
    }
}

class TagSearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            query: ''
        }
    }

    onChange(e) {
        this.setState({
            query: e.target.value.trim()
        }, () => {
            if (this.state.query.length >= 2) {
                this.findTags()
            } else {
                this.setState({
                    results: []
                })
            }
        })
    }

    findTags() {
        fetch('http://localhost:1337/api/tags?tag_name=' + this.state.query)
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        results: json.result
                    })
                }
            })
    }

    onSubmitNewTag() {
        const {query} = this.state;
        if (query.length >= 2) {
            fetch('http://localhost:1337/api/tags', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Projectr-Token': sessionStorage.getItem('projectrToken')
                },
                method: 'POST',
                body: JSON.stringify({
                    tag_name: query
                })
            })
            .then(response => response.json())
            .then(json => {
                if (json.success) {
                    const name = json.result.tag_name
                    Materialize.toast(`Added tag: ${name} to Projectr system.`, 2000)
                } else {
                    Materialize.toast('Could not add new tag (duplicate may exist).', 2000)
                }
            })
            .catch(err => {
                Materialize.toast('Could not add new tag (something went wrong).', 2000)
            })
            
        }
    }

    render() {
        const projectId = sessionStorage.getItem('currentProject')
        return (
            <div>
                <div className='search-box'>
                    <ul className='collection'>
                        <div id='search-main' style={{maxHeight: '320px', overflow: 'auto'}}>
                            {this.state.results.map((r, i) => {
                            return <TagMatch {...r} key={i} projectId={projectId}> </TagMatch>
                            })}
                        </div>
                        <input type='text' className='input-primary inline shadow' style={{paddingLeft: '10px'}} placeholder='Search for tags' onKeyUp={this.onChange.bind(this)}/>
                        <a title='Add a new tag if you could not find a match' className="secondary-content add-new-tag" onClick={this.onSubmitNewTag.bind(this)}><i className="material-icons">done</i></a>
                    </ul>
                </div>
                
            </div>
            
            
        )
    }
}

class TagMatch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            disabledProject: false
        }
    }

    onClick() {
        const url = 'http://localhost:1337/api/addusertag';
        const body = JSON.stringify({
            tag_id: this.props.tag_id
        })
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Projectr-Token': sessionStorage.getItem('projectrToken')
        }

        fetch(url, {
            method: 'POST',
            body,
            headers
        })
        .then(response => response.json())
        .then(json => {
            if (json.success) {
                this.setState({
                    disabled: true
                })
            }
        })
        .catch(err => console.log(err))
    }

    onClickAddTagToProject() {
        const url = 'http://localhost:1337/api/projects/' + this.props.projectId + '/tags';
        const body = JSON.stringify({
            tagId: this.props.tag_id
        })
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Projectr-Token': sessionStorage.getItem('projectrToken')
        }
        fetch(url, {
            method: 'POST',
            body,
            headers
        })
        .then(response => response.json())
        .then(json => {
            if (json.success) {
                this.setState({
                    disabledProject: true
                })
            }
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <li className='collection-item search-result'>{this.props.tag_name}
                {
                    this.props.projectId ? <a disabled={this.state.disabledProject} className="secondary-content project-add" title={`Add ${this.props.tag_name} to the current project.`} onClick={this.onClickAddTagToProject.bind(this)}><i className="material-icons">{this.state.disabledProject ? 'done' : 'add'}</i></a>
                        : ''
                }
                <a disabled={this.state.disabled} className="secondary-content" title={`Add ${this.props.tag_name} to your profile.`} onClick={this.onClick.bind(this)}><i className="material-icons">{this.state.disabled ? 'done' : 'add'}</i></a>
            </li>
        )
    }
}