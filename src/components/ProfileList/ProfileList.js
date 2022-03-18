import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../Profile/Profile';
import './ProfileList.css'

const People = [
    {
      reaction: "🥶",
      image: "https://i.imgur.com/BIx8hAD.jpg",
      firstName: "Liam",
      lastName: "Nelson",
      bio: "Shiba to the moon!"
    },
    {
      reaction: "💡",
      image: "https://i.imgur.com/HqInH4G.jpg",
      firstName: "Ema",
      lastName: "Watson",
      bio: undefined
    },
    {
      reaction: "🥶",
      image:
        "https://userstock.io/data/wp-content/uploads/2017/09/nick-karvounis-75432-scaled.jpg",
      firstName: "Lewis",
      lastName: "Verstappen",
      bio: "Catch me if you can"
    },
    {
      reaction: "💡",
      image:
        "https://userstock.io/data/wp-content/uploads/2017/09/ilaya-raja-280339.jpg",
      firstName: "Bill",
      lastName: "Jobs",
      bio: "Check me on twitter @bill"
    },
    {
      reaction: "🥶",
      image:
        "https://userstock.io/data/wp-content/uploads/2017/09/jason-blackeye-223584.jpg",
      firstName: "Ana",
      lastName: "Camille",
      bio: undefined
    },
    {
      reaction: "💡",
      image:
        "https://userstock.io/data/wp-content/uploads/2017/06/pexels-photo-62456-scaled.jpeg",
      firstName: "Piper",
      lastName: "E.",
      bio:
        "Total food specialist. Friendly webaholic. Coffee fan. Proud analyst. TV Expert. Explorer. Travel Nerd. Incurable beer advocate."
    }
    ]

class ProfileList extends React.Component {

    constructor(props) {
        super(props);
        this.sortByreaction = this.sortByreaction.bind(this)

    }

    sortByreaction(reaction) {
        
        const result = this.props.searchList.filter(person => person.reaction === reaction)
        const reactionPeople = result.map(person => {
            return (
                <div className='profilePreview'>
                    <img src={person.image} className = 'profilePics previewElement'/>
                    <div className = 'profile previewElement'>
                        <h3>{person.firstName}  {person.lastName} </h3>
                        <small className='bio'>{person.bio}</small>
                    </div>
                </div>
            )
            
        })

        return reactionPeople
    }

    render() {
        return (
            <div>
                <text className='filterByReaction'>Reacted with 💡: </text>
                {this.sortByreaction("💡")}
                <text className='filterByReaction'>Reacted with 🥶: </text>
                {this.sortByreaction("🥶")}
            </div>
        )
    }
    
}
export default ProfileList;