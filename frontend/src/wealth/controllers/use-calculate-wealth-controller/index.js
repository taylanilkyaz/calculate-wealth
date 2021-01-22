
export const useCalculateWealthController = () => {


    const calculateWealth = (wealth) => {
        //alert("Wealth has been came");
        const result = wealth.amount * 5;
        return result;
    }

    const calculateWealths = (wealths) => {
        //alert("Wealths have been came");
        const result = 10;
    }

    return {
        calculateWealth,
        calculateWealths
    }
}