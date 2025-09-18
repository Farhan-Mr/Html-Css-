// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".but");
    const display = document.getElementById("answer");

    // Initially set display to empty
    display.value = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "AC") {
                display.value = "";
            } else if (value === "Del") {
                display.value = display.value.slice(0, -1);
            } else if (value === "=") {
                try {
                    // Evaluate the expression
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        });
    });
});
