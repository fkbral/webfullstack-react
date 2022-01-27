import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export class Menu extends React.Component {
  render() {
    return (
      <nav className="themed-menu">
        <ul>
          {this.props.userRole === 'admin' && (
            <>
              <li>
                <a href="/cadastros">cadastros</a>
              </li>
              <li>
                <a href="/financeiro">financeiro</a>
              </li>
            </>
          )}

          <li>
            <a href="/relatorios">relatórios</a>
          </li>
        </ul>
        {this.props.userRole}
      </nav>
    )
  }
}

Menu.propTypes = {
  userRole: PropTypes.string.isRequired,
}

// Menu.defaultProps = {
//   userRole: 'user',
// }
