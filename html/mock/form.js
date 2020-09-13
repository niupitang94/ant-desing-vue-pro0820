function form(method) {
  let res = null;
  switch (method) {
    case "POST":
      res = { message: "Ok" };
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = form;
