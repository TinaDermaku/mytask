document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = [
        document.getElementById("internshipCheckbox"),
        document.getElementById("pabauCheckbox"),
        document.getElementById("employmentCheckbox"),
        document.getElementById("careerCheckbox")
    ];

    const shuffleButton = document.getElementById("shuffleButton");
    const changeButton = document.getElementById("changeButton");
    const showSelectedButton = document.getElementById("showSelectedButton");
    const selectedValuesDiv = document.getElementById("selectedValues");

    shuffleButton.addEventListener("click", function() {

        const shuffledCheckboxes = shuffleArray(checkboxes);
        checkboxes.forEach((checkbox, index) => {
            checkbox.nextElementSibling.textContent = shuffledCheckboxes[index].value;
        });
    });

    changeButton.addEventListener("click", function() {
        checkboxes.forEach((checkbox) => {
            checkbox.value = generateRandomValue();
            checkbox.nextElementSibling.textContent = checkbox.value;
        });
    });

    showSelectedButton.addEventListener("click", function() {

        const selectedValues = checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
        selectedValuesDiv.textContent = "Selected Values: " + selectedValues.join(", ");
    });

   
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    function generateRandomValue() {
        const randomWords = ["purple", "red", "green", "blue"];
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        return randomWords[randomIndex];
    }
});

