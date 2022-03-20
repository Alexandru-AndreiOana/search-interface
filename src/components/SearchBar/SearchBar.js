import React from "react";
import './SearchBar.css';
import ProfileList from "../ProfileList/ProfileList";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchTerm: '', bioOnly: false }

        this.handleSearchChange = this.handleSearchChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleSearchChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleCheckboxChange(event) {
        this.setState({
            bioOnly: event.target.checked
        })
    }

    render() {
        return(
            
            <div className="searchInterface">
                <div className="searchPrompt">
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
                        name = "bio-only"
                        value = "bio-only"
                        onChange = {this.handleCheckboxChange}
                    />
                    <label for="bio-only">Only show people with bio</label>
                </div>
                <ProfileList searchTerm = {this.state.searchTerm} filterBio = {this.state.bioOnly}/>
            </div>
        )
    }
}

export default SearchBar;