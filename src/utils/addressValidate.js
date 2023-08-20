
// this function takes address and 
export const validateAddress = (address) => {
  const addressRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9, ]{10,}$/
  return addressRegex.test(address);
};
