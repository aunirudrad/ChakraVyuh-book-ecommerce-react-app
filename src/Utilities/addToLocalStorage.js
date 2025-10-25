const getFromLocalStorage = () => {

    const getDataSTR = localStorage.getItem("readList");

    if(getDataSTR){
        const getBookData = JSON.parse(getDataSTR);
        return getBookData;
    }
    else {
        return [];
    }
}

const setToLocalStorage = id => {

    const storeBookData = getFromLocalStorage();

    if(storeBookData.includes(id)){
        alert("Data is already in LocalStorage!");
    }
    else{
        storeBookData.push(id);
        const data = JSON.stringify(storeBookData);
        localStorage.setItem("readList",data);
    }
}

export {setToLocalStorage, getFromLocalStorage};