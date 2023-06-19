import { useState, useEffect, useRef } from "react";
import QRCode from "qrcode.react";
import jsQR from "jsqr";

export default function Home() {
  const [mode, setMode] = useState<"send" | "receive" | null>(null);
  const [data, setData] = useState("");
  const [receivedData, setReceivedData] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (mode === "receive" && videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }

          const track = stream.getVideoTracks()[0];
          const imageCapture = new ImageCapture(track);

          const scan = () => {
            imageCapture
              .grabFrame()
              .then((bitmap) => {
                const context = new OffscreenCanvas(
                  bitmap.width,
                  bitmap.height
                ).getContext("2d");
                if (context) {
                  context.drawImage(bitmap, 0, 0, bitmap.width, bitmap.height);
                  const imageData = context.getImageData(
                    0,
                    0,
                    bitmap.width,
                    bitmap.height
                  );
                  const code = jsQR(
                    imageData.data,
                    imageData.width,
                    imageData.height
                  );
                  if (code && code.data) {
                    setReceivedData((oldData) => [...oldData, code.data]);
                  }
                }
              })
              .finally(() => {
                requestAnimationFrame(scan);
              });
          };

          scan();
        });
    }
  }, [mode]);

  return (
    <div>
      <button onClick={() => setMode("send")}>Send</button>
      <button onClick={() => setMode("receive")}>Receive</button>

      {mode === "send" && (
        <div>
          <textarea onChange={(e) => setData(e.target.value)} />
          <QRCode value={data} />
        </div>
      )}

      {mode === "receive" && (
        <div>
          <video ref={videoRef} autoPlay />
          <p>Received: {receivedData.join(",")}</p>
        </div>
      )}
    </div>
  );
}
