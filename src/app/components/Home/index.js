// React/Redux
import React, { Component } from 'react'

import styles from './home.css'

/**
 * Default root component. Shows a link to questions. It could ve a component.
 */
class Home extends Component {
  render() {
    const paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit tortor non nulla molestie, eget molestie quam tincidunt. Nullam consequat luctus vehicula. Mauris quis nisl massa. Praesent vitae tellus dignissim, imperdiet magna quis, convallis turpis. Phasellus ultrices at tellus pulvinar pellentesque. Nam iaculis bibendum fermentum. Proin commodo mattis odio, vitae auctor sem ullamcorper nec. Praesent vel dui ac odio congue lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque feugiat magna eu eros elementum, non pharetra quam faucibus. Vivamus vitae viverra tortor, in tempus diam. Aenean sagittis lacus vel interdum vestibulum.'

    const paragraph2 = 'Fusce maximus nunc justo, eu vehicula neque ornare id. Quisque lacinia euismod massa, ut elementum nisl gravida pellentesque. Sed lacinia enim vitae ex tincidunt aliquet. Donec mi ipsum, auctor vitae hendrerit et, iaculis et lectus. Duis eget vestibulum ligula. Cras elementum purus sit amet est sagittis, nec euismod justo efficitur. Pellentesque laoreet lacinia feugiat. Praesent tristique malesuada velit eget porta. Donec ut ex ac purus porta dapibus. Suspendisse vel molestie nulla. Etiam fringilla turpis vel feugiat hendrerit. Vestibulum accumsan lorem in lacus tempus accumsan.'

    const paragraph3 = 'Mauris ac lectus in urna fermentum scelerisque. Nulla gravida arcu quis turpis hendrerit, sit amet fermentum nisl blandit. Nam id eros ut nisi sodales viverra at vel odio. Vestibulum facilisis lacus sem, sit amet elementum risus dignissim in. Mauris iaculis vehicula fringilla. Praesent velit massa, rhoncus non pellentesque et, mollis a lacus. Pellentesque congue quam eu nunc placerat posuere. Fusce hendrerit eu orci eget consequat. Proin mattis ullamcorper elit, vitae lacinia dui volutpat rutrum.'

    const paragraph4 = 'Nunc in justo est. Nulla dignissim hendrerit massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi porta nunc in congue tristique. Phasellus congue consequat fringilla. In lectus mauris, luctus at dolor sit amet, euismod mattis nulla. Duis sit amet felis facilisis, sagittis velit et, tempor libero. Sed viverra interdum elit, id bibendum risus tristique eget. Aliquam quis turpis semper magna laoreet aliquet. Etiam vel tristique lorem, in fermentum ipsum. Etiam malesuada vulputate nibh id semper. Praesent gravida, elit ut tempus porta, dolor nunc hendrerit dui, et egestas quam urna ac dui. Vivamus non ipsum at purus mattis facilisis. Nunc euismod nec metus vitae commodo.'

    const paragraph5 = 'Pellentesque vitae metus ac dui facilisis vestibulum. Vivamus lacus lectus, vulputate finibus massa at, posuere elementum ipsum. Nullam facilisis nunc quis metus commodo, lobortis suscipit purus imperdiet. Phasellus fermentum, quam et suscipit malesuada, elit diam blandit dui, vitae consectetur ex lorem in mi. In eu auctor lorem. Donec volutpat aliquet lorem vel interdum. Suspendisse erat metus, consequat eget volutpat vel, dictum eu augue. Nullam ullamcorper nunc neque, rhoncus rutrum lacus euismod quis. Pellentesque eget neque tempor, vulputate tellus a, euismod lacus. In ut ante dolor. Vivamus dictum et dui a molestie. Nam interdum euismod ipsum nec consequat. Vestibulum ornare magna sit amet leo venenatis posuere. Nullam mollis aliquam elementum. Praesent a sapien ipsum.'

    return (
      <div className={ styles.home }>
        <p>{ paragraph1 }</p>
        <p>{ paragraph2 }</p>
        <p>{ paragraph3 }</p>
        <p>{ paragraph4 }</p>
        <p>{ paragraph5 }</p>
      </div>
    )
  }
}

export default Home
