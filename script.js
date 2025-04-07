function firstNonRepeatedChar(str) {
	for(int i=0;i<str.length;i++){
		if(str[i] !== str[i-1] && str[i] !== str[i+1]){
			return str[i];
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
