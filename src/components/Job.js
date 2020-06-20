import React, { Component } from 'react'
import axios from 'axios';

class Job extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount = () => {
        // this.props.match.params gives access to route parameters
        const jobId = this.props.match.params.id;

        axios.get(`/api/jobs/${jobId}`).then(res => {
            this.setState(res.data);
        })
    }

    render() {
        return (
            <div className="Job">
                <h1>{this.state.title}</h1>
                <a><img src={this.state.company_logo} width="100"></img></a>
                <div>How to apply</div>
                <span>Job Description</span>
            </div>
        )
    }
}

export default Job;