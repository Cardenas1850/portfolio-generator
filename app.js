var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// function to print profile data
const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    //is the same as this...

    profileDataArr.forEach(profileItem => console.log(profileItem));
};