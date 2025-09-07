const getTruckByVIN = async (vin) => {
    try {
        // const response = await fetch(`/public/data/qlogistics_truck.json`);
        const response = await fetch(`https://api.goqualitylogistics.com/qlogistics-tracking?vin=${vin}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export {getTruckByVIN};
