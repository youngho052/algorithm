// Defanging an IP Address

// link https://leetcode.com/problems/defanging-an-ip-address/

var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

defangIPaddr("1.1.1.1.1");

//output 1[.]1[.]1[.]1[.]1
