# Prototype Pollution Vulnerability in Node.js

This repository contains a vulnerable code example that demonstrates the prototype pollution vulnerability in Node.js.

## Vulnerability Description

The prototype pollution vulnerability allows an attacker to manipulate the prototype of objects, which can lead to unexpected behavior and security issues. In the context of Node.js, the `extend` function in the vulnerable code example is susceptible to prototype pollution. 

By merging objects with user-controlled data, an attacker can pollute the prototype of the target object, leading to potential security breaches.

## How to Run the Vulnerable Code

To run the vulnerable code example, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/TheWation/NodeJsPrototypePollutionLab
```

2. Run the vulnerable code:

```bash
node main.js
```

This will execute the vulnerable code that showcases the prototype pollution vulnerability using the custom `extend` function. 

3. Verify the output to observe the impact of the prototype pollution. 

## Disclaimer

 This repository is for educational purposes only. The vulnerable code example is provided to demonstrate the impact of the prototype pollution vulnerability. It is important to address such vulnerabilities and follow secure coding practices in real-world applications.
 
 For more information on the prototype pollution vulnerability and secure coding practices, refer to the official documentation and security resources. 

 
## License

`NodeJsPrototypePollutionLab` is made with ♥  by [Wation](https://github.com/TheWation) and it's released under the `Apache License 2.0` license.