function writeArrayToSessionStorage(keyName, arrayObject) {
    sessionStorage.setItem(keyName, JSON.stringify(arrayObject))
}