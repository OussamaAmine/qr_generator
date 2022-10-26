const QRCode = require("qrcode");

const opts = {
  errorCorrectionLevel: "H",
  type: "terminal",
  quality: 0.95,
  margin: 1,
  color: {
    dark: "#208698",
    light: "#FFF",
  },
};

QRCode.toString([{ data: "Hi testing QR code", mode: "byte" }])
  .then((qrImage) => {
    console.log("terminal", qrImage);
  })
  .catch((err) => {
    console.error(err);
  });

/*QRCode.toDataURL("Hi testing QR code", opts)
  .then((qrImage) => {
    console.log("URL", qrImage);
  })
  .catch((err) => {
    console.error(err);
  });*/

/*QRCode.toFile("qrCode.png", "Hi testing QR code", opts)
  .then((qrImage) => {
    console.log("File", qrImage);
  })
  .catch((err) => {
    console.error(err);
  });*/
