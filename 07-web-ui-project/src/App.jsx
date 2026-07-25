import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Navbar from './components/Section1/Navbar'


const App = () => {

  const users = [
    
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'royalblue',
      tag: 'Underviwer'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661585485816-cf099f97d11d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'red',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661750078687-cac8814a63bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'pink',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661722205238-f93e45a22c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      intro: '',
      color: 'black',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1689467895055-ae81661f1d92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'lightgreen',
      tag: 'Unbelievable'
    },
    {
      img: 'https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'blue',
      tag: 'Underviwer'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661585485816-cf099f97d11d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'red',
      tag: 'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661750078687-cac8814a63bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'pink',
      tag: 'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661722205238-f93e45a22c88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      intro: '',
      color: 'black',
      tag: 'Underbanked'
    },
    {
      img: 'https://images.unsplash.com/photo-1689467895055-ae81661f1d92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: '',
      color: 'lightgreen',
      tag: 'Unbelievable'
    }

  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App