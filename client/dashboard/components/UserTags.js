import React, { PropTypes } from 'react'
import {Tag} from './../../match/ProjectMatchContainer'

export class UserTagsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tags: []
        }
    }

    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-content'>
                        <span className="card-title">
                            <a>Your tags ({this.state.tags.length})</a>
                        </span>
                        <br />
                        <div className='row'>
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
            if (this.state.query.length > 3) {
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

    render() {
        return (
            <div className='search-box'>
                <ul className='collection'>
                      <div id='search-main' style={{maxHeight: '320px', overflow: 'auto'}}>
                        {this.state.results.map((r, i) => {
                          return <li className='collection-item search-result' key={i}>{r.tag_name}
                            <a className="secondary-content"><i className="material-icons">add</i></a>
                          </li>
                        })}
                      </div>
                      <input type='text' className='input-primary' style={{paddingLeft: '10px'}} placeholder='Search for tags' onKeyUp={this.onChange.bind(this)}/>
                </ul>
               
            </div>
        )
    }
}