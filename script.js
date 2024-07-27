const stateCityMap = {
    AP: ["Visakhapatnam", "Vijayawada", "Guntur"],
    AR: ["Itanagar", "Naharlagun"],
    AS: ["Guwahati", "Dibrugarh", "Silchar"],
    BR: ["Patna", "Gaya", "Bhagalpur"],
    CT: ["Raipur", "Bilaspur"],
    GA: ["Panaji", "Margao"],
    GJ: ["Ahmedabad", "Surat", "Vadodara"],
    HR: ["Chandigarh", "Gurgaon", "Faridabad"],
    HP: ["Shimla", "Manali"],
    JK: ["Srinagar", "Jammu"],
    JH: ["Ranchi", "Jamshedpur"],
    KA: ["Bengaluru", "Mysuru", "Mangaluru"],
    KL: ["Thiruvananthapuram", "Kochi", "Kozhikode"],
    MP: ["Bhopal", "Indore", "Gwalior"],
    MH: ["Mumbai", "Pune", "Nagpur"],
    MN: ["Imphal"],
    ML: ["Shillong"],
    MZ: ["Aizawl"],
    NL: ["Kohima", "Dimapur"],
    OR: ["Bhubaneswar", "Cuttack"],
    PB: ["Chandigarh", "Amritsar", "Ludhiana"],
    RJ: ["Jaipur", "Jodhpur", "Udaipur"],
    SK: ["Gangtok"],
    TN: ["Chennai", "Coimbatore", "Madurai"],
    TG: ["Hyderabad", "Warangal"],
    TR: ["Agartala"],
    UP: ["Lucknow", "Kanpur", "Varanasi"],
    UT: ["Dehradun", "Haridwar"],
    WB: ["Kolkata", "Howrah"],
    AN: ["Port Blair"],
    CH: ["Chandigarh"],
    DN: ["Daman", "Diu"],
    LD: ["Kavaratti"],
    DL: ["New Delhi"],
    PY: ["Puducherry"]
};

function updateCities() {
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const selectedState = stateSelect.value;

    // Clear existing city options
    citySelect.innerHTML = '<option value="">--Select City--</option>';

    if (selectedState && stateCityMap[selectedState]) {
        const cities = stateCityMap[selectedState];
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}
