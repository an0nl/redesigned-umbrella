document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "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"; // Replace "YOUR_API_KEY_HERE" with your actual API key
  const inputText = document.querySelector("#input-text");
  const generateButton = document.querySelector("#submit-button");
  const imageSection = document.querySelector(".image-section");

  // Add event listener to the generate button
  generateButton.addEventListener("click", async () => {
    const prompt = inputText.value.trim();
    if (prompt === "") {
      alert("Please enter a prompt.");
      return;
    }

    generateButton.disabled = true;

    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Invalid prompt. Please check the prompt and try again.");
        } else if (response.status === 402) {
          throw new Error("Billing hard limit has been reached. Please upgrade your account to continue using the API.");
        } else {
          throw new Error("An error occurred while generating the image. Please try again later.");
        }
      }

      const data = await response.json();
      const imageUrl = data.data[0].url;
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageSection.innerHTML = "";
      imageSection.appendChild(imageElement);

    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      generateButton.disabled = false;
    }
  });
});

