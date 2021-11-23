const container = document.getElementById("container")


function home_view() {
    container.innerHTML = ""
}

function stats_view() {
    container.innerHTML = `
    <div class="face">
                <div class="picture">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png" title="Jelenlegi szinted: ${jatekos.lvl}">
                    
                        <div class="hp-bar-outer">
                            <div id="hp-bar-inner">
                                <span id="hp-bar">${jatekos.max_hp}/${jatekos.hp}</span>
                            </div>
                        </div>
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
                    <div class="strength" id="strengthDiv" title="Sebzés: ${jatekos.get_dmg}">
                        <p>Erő: </p><span id="stength">${jatekos.strength}</span>
                    </div>
                    <div class="dexterity" id="dexterityDiv" title="Kitérési esély: ${jatekos.get_dodge}%">
                        <p>Ügyesség: </p><span id="dexterity">${jatekos.dexterity}</span>
                    </div>
                    <div class="intelligence" id="intelligenceDiv" title="Kritikus találat esély: ${jatekos.get_crit}%">
                        <p>Értelem: </p><span id="intelligence">${jatekos.intelligence}</span>
                    </div>
                    <div class="endurance" id="enduranceDiv" title="Védelem: ${jatekos.get_def}%">
                        <p>Kitartás: </p><span id="endurance">${jatekos.endurance}</span>
                    </div>
                </div>
                <div class="items">

                </div>
            </div>
    `
    if(jatekos.available) {
        let stats = document.getElementById("stats")
        for (const div in stats.children) {
            let temp = stats.children[div]
            if(typeof(temp) != typeof({})) continue
            temp.onclick = () => {jatekos.addPoint(temp.className)}
            temp.style.backgroundColor = "green"
            temp.style.cursor = "pointer"
        }
        
    }
    document.getElementById("hp-bar-inner").style.width = jatekos.hp / jatekos.max_hp * 100 + "%"
}