import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Nav } from 'app/components'

export default class AppRoot extends Component {
  render () {
    const { route } = this.props
    return (
      <S.AppRootComponent>
        <Nav />
        {renderRoutes(route.routes)}
      </S.AppRootComponent>
    )
  }
}
