import React from 'react'
import { connect } from 'react-redux'
import { apiGetOneBird } from '../apis'

class BirdProfile extends React.Component {
   state = {
       birdImg: '',
       birdName: '',
       birdEnglishName: '',
       birdRarity: '',
       birdNocturnal: false,
       birdTag: '',
       birdInfo: '',
   }

   componentDidMount() {
       
   }


    render() {
        console.log(this)
        return (
          <>
          <div className="birdProfile">
            <div className="birdImg">
                <img src={this.props.img} alt="Image of bird"/>
            </div>
            <p className="birdName">Name: {this.birdName}
            </p>
            <p className="birdEnglishName">English Name: {this.birdEnglishName}
            </p>
            <p className="birdRarity">Status: {this.birdRarity}
            </p>
            <p className="birdNocturnal">Nocturnal: {this.birdNocturnal}
            </p>
            <p className="birdTag"> {this.birdTag}
            </p>
            <p className="birdInfo"> {this.birdInfo}</p>

          </div>
          </>  
        )
    }
}

const mapStateToProps = ({auth}) => {
        return {
          auth
        }
      }


export default connect(mapStateToProps)(BirdProfile)