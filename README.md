# webcrawler-startup
Project to learn how to build a webcrawler in Javascript.

## Features

- Crawls websites recursively following internal links only
- Normalizes URLs (removes protocols, trailing slashes, converts to lowercase)
- Tracks visit frequency for each page
- Generates sorted reports showing most linked-to pages
- Handles various content types (skips non-HTML content)
- Error handling for network issues and invalid URLs

## Prerequisites

- Node.js 22.17.0 (specified in .nvmrc)
- npm

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd webcrawler-startup
```

2. Install Node.js version (if using NVM):
```bash
nvm install
nvm use
```

3. Install dependencies:
```bash
npm install
```

## Usage

Run the crawler with a target website:

```bash
npm run start <website-url>
```

Example:
```bash
npm run start https://tonytonybalony.github.io/
```

## Testing

Run the test suite:
```bash
npm test
```

## Project Structure

- `main.js` - Entry point and command line argument handling
- `crawl.js` - Core crawling logic and URL processing
- `report.js` - Report generation and page sorting
- `crawl.test.js` - Test cases for crawling functions
- `package.json` - Project dependencies and scripts
- `.nvmrc` - Node.js version specification

## Example Output

```
starting crawl of https://tonytonybalony.github.io/
actively crawling: https://tonytonybalony.github.io/
...
==========
REPORT
==========
Found 103 links to page: tonytonybalony.github.io/
Found 62 links to page: tonytonybalony.github.io
Found 57 links to page: tonytonybalony.github.io/about
...
==========
END REPORT
==========
```

## How It Works

1. **URL Normalization**: Removes protocols, trailing slashes, and converts to lowercase
2. **Domain Filtering**: Only crawls pages within the same domain as the starting URL
3. **Visit Tracking**: Counts how many times each page is linked to
4. **Content Filtering**: Only processes HTML content, skips XML, images, etc.
5. **Report Generation**: Sorts pages by link frequency and displays results

## Error Handling

The crawler handles:
- Network errors and timeouts
- Invalid URLs
- Non-HTML content types
- HTTP error status codes (4xx, 5xx)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## License

MIT License
