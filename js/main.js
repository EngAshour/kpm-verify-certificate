function formatSerial(input) {
  let value = input.value.replace(/\s+/g, "").toUpperCase(); // Remove spaces & ensure uppercase
  // let formattedValue = value.match(/.{1,4}/g)?.join(" ") || ""; // Insert space every 4 characters
  input.value = value;
}
