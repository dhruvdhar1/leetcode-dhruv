/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let addedEnergy = 0
    for(let i=0; i<energy.length; i++) {
        if(initialEnergy > energy[i]) {
            initialEnergy -= energy[i]
        } else {
            const delta = energy[i]+1-initialEnergy
            addedEnergy += delta
            initialEnergy += delta
            initialEnergy -= energy[i]
        }
    }
    // console.log("energy: ", addedEnergy)

    let addedExp = 0
    for(let i=0; i<experience.length; i++) {
        if(initialExperience > experience[i]) {
            initialExperience += experience[i]
        } else {
            const delta = experience[i]+1-initialExperience
            addedExp += delta
            initialExperience += (delta + experience[i])
        }
    }
    // console.log("exp: ", addedExp)
    return addedEnergy + addedExp
};