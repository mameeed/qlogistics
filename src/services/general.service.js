const postGetQuote = async (body) => {
    try {
        const response = await fetch("https://api.goqualitylogistics.com/qlogistics-getquote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

const applyFroDriver = async (body) => {
    try {
        const response = await fetch("https://api.goqualitylogistics.com/qlogistics-apply", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

export {postGetQuote, applyFroDriver};
