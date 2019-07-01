import firebase from 'firebase';

export {
    saveTrash
}

function saveTrash(trash) {
    return firebase.database().ref('trash/').push({
        latLng: trash.latLng,
        trashTypes: trash.trashTypes,
        timestamp: new Date().getTime()
    });
}