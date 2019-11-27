import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Nav, MobileMenu, Footer } from 'app/components'

export default class AppRoot extends Component {
  render () {
    const { route } = this.props
    return (
      <S.AppRootComponent>
        <Nav />
        <MobileMenu />
        {renderRoutes(route.routes)}
        <Footer />
      </S.AppRootComponent>
    )
  }
}
