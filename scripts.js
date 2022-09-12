document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        if(!localStorage.livros) {
            localStorage.setItem("livros", []);
        }
    }
};

