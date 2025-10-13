export function validateTextInput(value) {
  if (value.length < 1) {
    return "Field is required";
  } else if (/\s\s/.test(value)) {
    return "Too many spaces";
  } else if (value.length < 3) {
    return "Too short";
  }
  return true;
}

export function validateBasicUrl(url) {
  const urlRegex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
  if (url.length < 1) {
    return "Field is required";
  } else if (!urlRegex.test(url)) {
    return "Invalid URL format";
  }
}

export function validateBasicPassword(password) {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (password.length < 1) {
    return "Field is required";
  } else if (!passwordRegex.test(password)) {
    return "Password must contain atlease 8 characters, 1 number, 1 letter, and 1 special character";
  }
}

export function validateBasicEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (email.length < 1) {
    return "Field is required";
  } else if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
}
