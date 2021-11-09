const container = document.getElementById("container")


function home_view() {
    container.innerHTML = ""
}

function stats_view() {
    container.innerHTML = `
    <div class="face">
                <div class="picture">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png">
                </div>
                <div class="armor">
                    <div class="helmet">
                        <img src="https://image.flaticon.com/icons/png/512/112/112255.png" id="helmet">
                    </div>
                    <div class="chestplate">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/armor-21-1078513.png"
                            id="chestplate">
                    </div>
                    <div class="leggings">
                        <img src="https://cdn2.iconfinder.com/data/icons/line-game-set/64/FIRST_SET_ICON_part_1-11-512.png"
                            id="leggings">
                    </div>
                    <div class="boots">
                        <img src="https://www.pngrepo.com/png/322686/512/leg-armor.png" id="boots">
                    </div>
                </div>
                <div class="weapon">
                    <div class="sword">
                        <img src="https://www.freeiconspng.com/thumbs/sword-icon/sword-icon-1.png" id="sword">
                    </div>
                    <div class="shield">
                        <img src="https://www.freeiconspng.com/thumbs/shield-png/shield-png-1.png" id="shield">
                    </div>
                </div>
            </div>
            <div class="inv">
                <div class="stats" id="stats">
                    <div class="strength" id="strengthDiv">
                        <p>Erő: </p><span id="stength">${gazsi.strength}</span>
                    </div>
                    <div class="dexterity" id="dexterityDiv">
                        <p>Ügyesség: </p><span id="dexterity">${gazsi.dexterity}</span>
                    </div>
                    <div class="intelligence" id="intelligenceDiv">
                        <p>Értelem: </p><span id="intelligence">${gazsi.intelligence}</span>
                    </div>
                    <div class="endurance" id="enduranceDiv">
                        <p>Kitartás: </p><span id="endurance">${gazsi.endurance}</span>
                    </div>
                </div>
                <div class="items">

                </div>
            </div>
    `
    if(gazsi.available) {
        let stats = document.getElementById("stats")
        for (const div in stats.children) {
            let temp = stats.children[div]
            temp.onclick = () => {gazsi.addPoint(temp.className)}
            temp.style.backgroundColor = "green"
        }
        
    }
}