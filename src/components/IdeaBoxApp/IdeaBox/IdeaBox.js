import React, {useState} from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'
import './IdeaBox.css'

const IdeaBox = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make a secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To exact vengeance upon my enemies' }
  ])


  const addIdea = (newIdea) => {
    setIdeas([...ideas,newIdea])
  }

  const deleteIdea = (id) => {
    const filteredIdeas = ideas.filter(idea => idea.id !== id)
    setIdeas(filteredIdeas)
  }


    return (
      <div>
        <h1>IdeaBox</h1>
        <Form addIdea={addIdea}/>
        <Ideas deleteIdea={deleteIdea} ideas={ideas}/>
      </div>
    )

}

export default IdeaBox