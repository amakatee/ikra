import React from 'react'
import { Layout } from '../components/Layout'

const User = () => {
   
  const quizs = [{
    id: '1',
    question:'vopros',
    answers: [
      {
      id:"1",
      answer:'option1'
      },
      {
        id:"2",
        anser:'option2'
      }
    ]


  }]

  return (
    <Layout>
        <section className='quiz-section'>
          <div className='quiz-cont'>
           {quizs.map(q => (
             <div className='quest-box'>{q.question}</div>
             
           ))}
           

            <div className='quiz-opts'>
              <div>answer 1</div>
              <div>answer2</div>
            </div>
          </div>
        </section>

    </Layout>
    
  )
}

export default User