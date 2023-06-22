# qr-transfer-app - A Data Transmission Application

qr-transfer-app is a NextJS application designed to transmit and receive data by generating multiple frames of QR codes in GIF animation format from text files. This application uses the monitor as an interface to communicate the data.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technology Used](#technology-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

Before running the app, ensure that you have Node.js and npm installed. You can check this by running `node -v` and `npm -v` in your terminal/command prompt.

To install the app:

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/username/qr-transfer-app.git
    ```
2. Navigate to the repository:
    ```bash
    cd qr-transfer-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. To start the app, run:
    ```bash
    npm run dev
    ```
2. Navigate to `http://localhost:3000` on your web browser.
3. Choose either `Send` or `Receive` mode. 
   - `Send` mode: Input data into the provided text area, which will be converted into a QR code.
   - `Receive` mode: Start receiving QR code data through your webcam. The received data will be displayed below the video stream.

## Technology Used

This application is built using the following technologies:

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [qrcode.react](https://www.npmjs.com/package/qrcode.react): A React component to generate and display QR Codes.
- [jsQR](https://www.npmjs.com/package/jsqr): A cross-platform JavaScript library to decode QR codes.

## Contributing

Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

[MIT](LICENSE.md)

## Acknowledgements

We would like to acknowledge the creators of the libraries and frameworks used in this application.