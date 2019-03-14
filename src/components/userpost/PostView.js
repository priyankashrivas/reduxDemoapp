import React from 'react'
import { postList } from '../../actions'
import { connect } from 'react-redux'

class PostView extends React.Component {
  
  render () {
     if(this.props.post !== undefined){
      //console.log(this.props.post,'render post');
      const {id,title,content} = this.props.post;
      return (
          <div className='ui secondary pointing menu' key={id}>
              <h1>{title.rendered}</h1>
                <div className='description'>
                  {content.rendered}
            </div>
          </div>
        )
    }else {
      return <div>Loading ......</div>
    }
  }
}
const mapStateToProps = ({posts},ownProps) => {
  //console.log(ownProps.match.params.id ,'postveiw')
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{postList})(PostView);
