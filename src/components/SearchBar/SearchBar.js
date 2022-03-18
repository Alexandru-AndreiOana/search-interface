import React from "react";
import './SearchBar.css';
import ProfileList from "../ProfileList/ProfileList";


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


class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '', bioOnly: false, searchList: People, hiddenPeople: [] }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.filterBy = this.filterBy.bind(this)
    }


    filterBy(searchTerm) {
        let result = People.filter(person => {
            return (person.firstName.includes(searchTerm) || person.lastName.includes(searchTerm))
        })
        
        if (this.state.bioOnly === true) {
            //showOnlyBio
            const removeWithoutBio = result.filter(person => {
                return(person.bio != undefined)
            })
            this.setState({
                searchList: removeWithoutBio
            })
        }
        else{
            this.setState({
                searchList: result
            })
        }
        console.log(this.state.bioOnly)
    }

    handleSearchChange(event) {
        const searchTerm = event.target.value
        this.setState({
            searchTerm: searchTerm
        })
        this.filterBy(searchTerm)
    }

    handleCheckboxChange() {
        console.log(this.state.bioOnly)
        this.setState({
            bioOnly: !this.state.bioOnly
        })
        if(this.state.bioOnly === false) {
            //showOnlyBio()
            const removeWithoutBio = this.state.searchList.filter(person => {
                return(person.bio != undefined)
            })
           // let hiddenPeople = this.state.searchList.filter(person => !removeWithoutBio.includes(person));

            this.setState({
                searchList: removeWithoutBio
            })
        }
        
        else {
            const searchTerm = this.state.searchTerm
            let result = People.filter(person => {
                return (person.firstName.includes(searchTerm) || person.lastName.includes(searchTerm))
            })

            this.setState({
                searchList: result
            })
            
            }
    }

    render() {
        return(
            
            <div className="SearchBar">
                    <input 
                        type = "search"
                        id = "search"
                        placeholder = "Search..."
                        onChange = {this.handleSearchChange}
                        autoComplete = "off"
                    />
                    <br/>
                    <input
                        type = "checkbox"
                        id = "bio-only"
                        value= "bio-only"
                        onChange = {this.handleCheckboxChange}
                    />
                    <label for="bio-only">Only show people with bio</label>
                    <br/>
                    <br/>
                    <ProfileList searchList = {this.state.searchList}/>
            </div>
        )
    }
}

export default SearchBar;