function extend() {
  let target = arguments[0]; // Set the first argument as the target object
  let length = arguments.length;
  let deep = false;
  let i = 1;

  // Handle a deep copy situation
  if (typeof target === 'boolean') {
    deep = target;
    target = arguments[i]; // Set the second argument as the target object
    i++;
  }

  // If the target is not an object, set it to an empty object
  if (typeof target !== 'object') {
    target = {};
  }

  // Loop through the arguments and extend them
  for (; i < length; i++) {
    let options;
    if ((options = arguments[i]) != null) {
      for (let name in options) {
        let src = target[name];
        let copy = options[name];

        // Prevent infinite loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (typeof copy === 'object' || Array.isArray(copy))) {
          let clone;
          if (Array.isArray(copy)) {
            clone = src && Array.isArray(src) ? src : [];
          } else {
            clone = src && typeof src === 'object' ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
}

module.exports = extend;