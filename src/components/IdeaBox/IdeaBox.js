import React, {Component} from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
import './IdeaBox.css'

class IdeaBox extends Component {
  constructor() {
    super()
    this.state = {
      ideas:[
        { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
        { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
        { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ideas:[...this.state.ideas,newIdea]})
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter(idea => idea.id !== id)
    this.setState({ideas: filteredIdeas})
  }

  render() {
    return (
      <div>
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea}/>
        <Ideas deleteIdea={this.deleteIdea} ideas={this.state.ideas}/>
      </div>
    )
  }
}

export default IdeaBox