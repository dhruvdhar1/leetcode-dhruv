/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let count = 0
    for(let i=0; i<energy.length; i++) {
        if(initialExperience <= experience[i]) {
            count += experience[i]-initialExperience+1;
            initialExperience += experience[i]-initialExperience+1;
        }
        initialEnergy -= energy[i]
        initialExperience += experience[i]


    }
            if(initialEnergy < 1) {
            count += 1-initialEnergy
        }
    return count
};