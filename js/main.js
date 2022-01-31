const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Function to search state.json
const searchStates = async searchText => {
    const res = await fetch('../data/states.json');
    const states = await res.json();

    let matches = states.filter(state => {
        // For RegExp - ^ searches for anything matching at beginning
        // 'gi' are flags for *g*lobal and case-*i*nsensitive
        const regEx = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regEx) || state.abbr.match(regEx);
    });

    // If search input is empty, reset matches array to empty array to prevent all 50 states from returning
    if (searchText.length === 0) {
        matches = [];
    } 
}

// Add event listener on search input. 'input' listens for any input
search.addEventListener('input', () => searchStates(search.value)); // search.value passes in search.value as a argument
