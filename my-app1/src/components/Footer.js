import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer  style={{padding : 10}}   className='footer footer-copyringt- text-center'>
        @ {new Date().getFullYear()} copyringt : <a href='#' >อะไรก็ไม่รุ็</a>
        </footer>
    )
  }
}
