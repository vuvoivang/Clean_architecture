export function readCookie(name) {
  let ck: any = document.cookie;
  if (ck) {
    ck = ck.split("; ");
    if (ck && ck.length > 0) {
      const nameLen = name.length + 1;
      for (let i = ck.length - 1; i >= 0; i--) {
        let item = ck[i];
        if (item && item.indexOf(name) === 0) {
          item = item.substring(nameLen, item.length);
          if (item) {
            item = item.replace(/["']/g, "");
            return item;
          }
        }
      }
    }
  }
  return "";
}
