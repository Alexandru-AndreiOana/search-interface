import React from 'react';
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
        this.reactions = ['💡', '🥶']
    }

    filterBySearchTerm(searchTerm) {
        let fullName = ''
        return (
            People.filter(person => {
                fullName = person.firstName.concat(' ', person.lastName).toLowerCase()
                return (fullName.includes(searchTerm.toLowerCase()))
            })
        )
    }

    filterList(reaction) {
        const searchTerm = this.props.searchTerm
        let result = this.filterBySearchTerm(searchTerm)

        //filterByReaction
        result = result.filter(person => {
            return person.reaction === reaction
        })

        //filterByBio
        if(this.props.filterBio) {
            result = result.filter(person => person.bio != undefined)
        }

        return(
            result.map(person => {
                return (
                    <div className='profilePreview'>
                        <img src={person.image} className = 'profilePics'/>
                        <div className = 'profileInfo'>
                            <h3>{person.firstName}  {person.lastName} </h3>
                            <small className='bio'>{person.bio}</small>
                        </div>
                    </div>
                )
            })
        ) 
    }

    render() {
        return (
            <div className='searchResult'>
                <div className='listByReaction'>
                    <text className='listPrompt'>Reacted with {this.reactions[0]}:
                    </text>{this.filterList(this.reactions[0])}
                </div>
                <div className='listByReaction'>
                    <text className='listPrompt'>Reacted with {this.reactions[1]}:
                    </text>{this.filterList(this.reactions[1])}
                </div>
            </div>
        )
    }
}

export default ProfileList;