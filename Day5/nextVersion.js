function nextVersion(version) {
  if (version.indexOf('.') === -1) {
    version = +version + 1;
    return (String(version));
  }
  let versionParts = version.split('.');
  let lastVersionElement = versionParts.length - 1;
  versionParts[lastVersionElement] = +versionParts[lastVersionElement] + 1;
  if (versionParts[lastVersionElement] >= 10) {
    for (let i = (lastVersionElement); i > 0; i--) {
      versionParts[i] = 0;
      versionParts[i-1] = +versionParts[i-1] + 1;
    }
  }
  version = versionParts.join('.');
  return String(version);
}

console.log(nextVersion("1.2.3"));
console.log(nextVersion("1"));
console.log(nextVersion("1.2.3.4.5.6.7.8"));
console.log(nextVersion("0.9.9"));
console.log(nextVersion("9.9"));
