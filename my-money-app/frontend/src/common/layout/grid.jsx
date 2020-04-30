import React, {Component} from 'react'

export default class Grid extends Component {
  toCssClass(numbers){
    const cols = numbers ? numbers.split('') : []
    let classes = ''

    if(cols[0]) classes += `col-xs-${cols[0]}`
    if(cols[1]) classes += `col-sm-${cols[1]}`
    if(cols[2]) classes += `col-md-${cols[2]}`
    if(cols[2]) classes += `col-lg-${cols[3]}`

    return classes
  }

  render() {
    const gridClasses = this.toCssClass(this.props.cols || '12')
    return (
      <div className={gridClasses}>
        {this.props.children}
      </div>
    )
  }
}