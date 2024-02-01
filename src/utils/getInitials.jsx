export const getInitials = (fullName) => {
  const names = fullName.split(" ");

  if (names.length === 1) {
    return fullName.substring(0, 2).toUpperCase();
  } else if (names.length >= 2) {
    const firstNameInitial = names[0][0].toUpperCase();
    const lastNameInitial = names[names.length - 1][0].toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  } else {
    return "Invalid Input";
  }
};
