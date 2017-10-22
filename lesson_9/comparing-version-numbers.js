function compareVersions(version1, version2) {
	var valid = isValidVersion(arguments);
	if (!valid) {
		return null;
	}

  var version1Array = constructVersionArray(version1);
 	var version2Array = constructVersionArray(version2);

 	if (version1Array.length !== version2Array.length) {
	  equalizeArrays(version1Array, version2Array);
 	}

  var result = compareComponents(version1Array, version2Array);

  return result || 0;
}

function isValidVersion(versions) {
	var args = Array.prototype.slice.call(versions);
  for (var i = 0; i < args.length; i += 1) {
  	if (!args[i].match(/^(\d\.)*\d+$/)) {
  		return null;
  	}
  }

  return true;
}

function constructVersionArray(version) {
	var stringArray = version.split(/\./);
	return stringArray.map(function(versionComponent){
		return Number(versionComponent);
	});
}

function equalizeArrays(version1, version2) {
	var length;
	if (version1.length > version2.length) {
		length = version1.length - version2.length;
		appendZeroes(version2, length)
	} else if (version1.length < version2.length) {
		length = version2.length - version1.length;
		appendZeroes(version1, length);
	}
}

function appendZeroes(version, length) {
	for (var i = 0; i < length; i += 1) {
		version.push('0');
	}
}

function compareComponents(version1Arr, version2Arr) {
	for (var i = 0; i < version1Arr.length; i += 1) {
  	if (version1Arr[i] > version2Arr[i]) {
  		return 1;
  	} else if (version1Arr[i] < version2Arr[i]) {
  		return -1;
  	}
  }
}

console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));    // -1