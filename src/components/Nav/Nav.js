import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'
import { Wordmark } from '../'

@connect(null, { openModal })
export default class Nav extends Component {
  handleSignUp = () => {
    this.props.openModal({ name: 'SignUpModal' })
  }

  handleLogIn = () => {
    this.props.openModal({ name: 'LogInModal' })
  }

  render () {
    return (
      <S.NavComponent>
        <S.LogoLink to='/'>
          <Wordmark />
        </S.LogoLink>
      </S.NavComponent>
    )
  }
}
