# 🚀 Rocketicon

`rocketicon` is an npm package that generates unique, deterministic rocket icons (SVG format) based on a hashed input. Each rocket is made up of different components (nose, body, fins, exhaust) that are selected based on the input string. Perfect for creating unique user avatars, placeholders, or fun visual identifiers!

## Features

- **Deterministic Generation:** The same input always produces the same rocket icon.
- **Customizable Components:** Rockets are made up of multiple parts (nose, body, fins, exhaust) combined in unique ways.
- **SVG Output:** Scalable and lightweight images.
- **Lightweight Dependency:** Uses Node's built-in `crypto` module for hashing.

## Installation

Install the package via npm:

```bash
npm install rocketicon
```

## Usage

### Basic Example

```javascript
import { getRocketSVG } from "rocketicon";

const input = "exampleUser123";
const rocketSVG = getRocketSVG(input);

console.log(rocketSVG);
```

### Saving the SVG to a File

You can save the generated SVG to a file using Node.js:

```javascript
import { getRocketSVG } from "rocketicon";
import fs from "fs";

const input = "exampleUser123";
const rocketSVG = getRocketSVG(input);

fs.writeFileSync("rocket.svg", rocketSVG);
console.log("Rocket SVG saved as rocket.svg");
```

## API

### `getRocketSVG(input: string): string`

Generates a rocket icon as an SVG string based on the input string.

- **Parameters:**
  - `input` _(string)_: A unique string (e.g., username or email) to generate the rocket.
- **Returns:**
  - _(string)_: An SVG representation of the rocket.

### Example Output

Here’s an example of a generated SVG:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 200" width="100" height="200">
  <path d="M50 0 L90 50 L10 50 Z" fill="#FF5733" />
  <path d="M20 50 L80 50 L80 150 L20 150 Z" fill="#33C3FF" />
  <path d="M20 150 L50 130 L50 150 Z" fill="#FFC300" />
  <path d="M30 150 C40 180, 60 180, 70 150 Z" fill="#C70039" />
</svg>
```

## How It Works

1. The input string is hashed using SHA-256.
2. The hash is split into segments and mapped to indices corresponding to predefined SVG paths for rocket components.
3. These components are combined into a complete rocket SVG.

## File Structure

```plaintext
rocketicon/
├── src/
│   ├── index.js         # Main entry point
│   ├── hashUtils.js     # Utility functions for hashing and mapping
│   ├── rocketParts.js   # SVG paths for different rocket components
│   ├── generator.js     # Rocket generation logic
├── examples/
│   ├── demo.js          # Example usage
├── package.json         # Package metadata
├── README.md            # Documentation
├── .gitignore           # Git ignore file
└── LICENSE              # License file
```

## Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Running the Example

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/xooxaa/rocketicon.git
cd rocketicon
```

Run the example:

```bash
node examples/demo.js
```

### Testing

You can add tests using a framework like Jest or Mocha to ensure the rockets are generated correctly.

## Contributing

Contributions are welcome! If you have ideas for new rocket components, color schemes, or features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Inspired by deterministic avatar generators like [Identicons](https://en.wikipedia.org/wiki/Identicon), this project brings a fun twist with rockets!
