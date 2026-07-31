
function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraToken = tokensUsed - 500;
    let fullHundred = Math.floor(extraToken / 100);
    let totalCost = fullHundred * 5;

    return totalCost;
}
